import { OAuth2Client } from 'google-auth-library';
import { NextResponse } from 'next/server';
import sql, { initDb } from '@/lib/db';
import {
  clearSessionCookie,
  getAuthenticatedUser,
  getAuthSessionSecret,
  isAuthConfigurationError,
  setSessionCookie,
} from '@/lib/session';
import {
  googleUsernameFromSubject,
  isGoogleAdminEmail,
  matchesGoogleNonce,
} from '@/lib/google-identity';

export const runtime = 'nodejs';

const GOOGLE_NONCE_COOKIE = 'fridge_google_nonce';

async function ensureUserData(userId: number, isFirstAccount: boolean) {
  if (isFirstAccount) {
    await sql`UPDATE profiles SET "userId" = ${userId} WHERE "userId" IS NULL`;
    await sql`UPDATE inventory SET "userId" = ${userId} WHERE "userId" IS NULL OR "userId" = 1`;
  }

  const profiles = await sql`SELECT COUNT(*)::int AS count FROM profiles WHERE "userId" = ${userId}`;
  if (!profiles[0]?.count) {
    await sql`
      INSERT INTO profiles (name, "dietaryPreference", allergies, avatar, "userId")
      VALUES ('Primary Profile', 'Any', '', '👤', ${userId})
    `;
  }
}

function readCookie(request: Request, name: string): string | null {
  const cookieHeader = request.headers.get('cookie') || '';
  for (const cookie of cookieHeader.split(';')) {
    const separator = cookie.indexOf('=');
    if (separator < 0 || cookie.slice(0, separator).trim() !== name) continue;
    try {
      return decodeURIComponent(cookie.slice(separator + 1).trim());
    } catch {
      return null;
    }
  }
  return null;
}

function clearGoogleNonceCookie(response: NextResponse) {
  response.cookies.set(GOOGLE_NONCE_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/api/auth',
    maxAge: 0,
  });
}

export async function POST(request: Request) {
  try {
    getAuthSessionSecret();
    const googleClientId = process.env.GOOGLE_CLIENT_ID;
    if (!googleClientId) {
      return NextResponse.json(
        { success: false, error: 'Google sign-in is not configured on the server.' },
        { status: 503 },
      );
    }

    const body: unknown = await request.json();
    if (typeof body !== 'object' || body === null || !('idToken' in body) ||
      typeof body.idToken !== 'string' || !body.idToken) {
      return NextResponse.json(
        { success: false, error: 'A Google sign-in token is required.' },
        { status: 400 },
      );
    }

    let payload;
    try {
      const ticket = await new OAuth2Client(googleClientId).verifyIdToken({
        idToken: body.idToken,
        audience: googleClientId,
      });
      payload = ticket.getPayload();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Google could not verify your sign-in. Please try again.' },
        { status: 401 },
      );
    }

    const nonce = readCookie(request, GOOGLE_NONCE_COOKIE);
    if (!payload?.sub || !nonce || !matchesGoogleNonce(nonce, payload.nonce)) {
      return NextResponse.json(
        { success: false, error: 'Google sign-in expired. Please try again.' },
        { status: 401 },
      );
    }

    const email = payload.email?.trim().toLowerCase();
    if (!email || payload.email_verified !== true) {
      return NextResponse.json(
        { success: false, error: 'Google did not provide a verified email address.' },
        { status: 403 },
      );
    }

    await initDb();
    const existingUsers = await sql`
      SELECT id, username, email, "displayName", status, role
      FROM users WHERE "googleSub" = ${payload.sub}
    `;

    let user = existingUsers[0];
    let isFirstAccount = false;
    if (user) {
      if (user.status !== 'active') {
        return NextResponse.json(
          { success: false, error: 'This user account has been suspended by Admin.' },
          { status: 403 },
        );
      }
      const updatedUsers = await sql`
        UPDATE users
        SET email = ${email}, "displayName" = ${payload.name?.trim() || email}
        WHERE id = ${user.id}
        RETURNING id, username, email, "displayName", status, role
      `;
      user = updatedUsers[0];
    } else {
      const count = await sql`SELECT COUNT(*)::int AS count FROM users`;
      isFirstAccount = count[0]?.count === 0;
      const role = isGoogleAdminEmail(email, process.env.GOOGLE_ADMIN_EMAILS) ? 'admin' : 'user';
      const createdUsers = await sql`
        INSERT INTO users (username, "googleSub", email, "displayName", status, role)
        VALUES (
          ${googleUsernameFromSubject(payload.sub)},
          ${payload.sub},
          ${email},
          ${payload.name?.trim() || email},
          'active',
          ${role}
        )
        ON CONFLICT ("googleSub") DO NOTHING
        RETURNING id, username, email, "displayName", status, role
      `;
      user = createdUsers[0];
      if (!user) {
        const concurrentUsers = await sql`
          SELECT id, username, email, "displayName", status, role
          FROM users WHERE "googleSub" = ${payload.sub}
        `;
        user = concurrentUsers[0];
        isFirstAccount = false;
      }
      if (!user) throw new Error('Unable to create or locate Google account.');
      if (user.status !== 'active') {
        return NextResponse.json(
          { success: false, error: 'This user account has been suspended by Admin.' },
          { status: 403 },
        );
      }
    }

    await ensureUserData(user.id, isFirstAccount);
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        displayName: user.displayName,
        status: user.status,
        role: user.role,
      },
    });
    setSessionCookie(response, user.id);
    clearGoogleNonceCookie(response);
    return response;
  } catch (error: unknown) {
    if (isAuthConfigurationError(error)) {
      return NextResponse.json(
        { success: false, error: 'AUTH_SESSION_SECRET must be configured with at least 32 bytes.' },
        { status: 503 },
      );
    }
    console.error('Google authentication failed:', error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed.' },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json({ success: false, error: 'Authentication required.' }, { status: 401 });
    }
    return NextResponse.json({ success: true, user });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error && isAuthConfigurationError(error) ? error.message : 'Server error.',
      },
      { status: isAuthConfigurationError(error) ? 503 : 500 },
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  clearSessionCookie(response);
  return response;
}
