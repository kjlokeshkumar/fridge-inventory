import { NextResponse } from 'next/server';
import sql, { initDb } from '@/lib/db';
import { hashPasskey, verifyPasskey } from '@/lib/passkeys';
import {
  clearSessionCookie,
  getAuthenticatedUser,
  getAuthSessionSecret,
  isAuthConfigurationError,
  setSessionCookie,
} from '@/lib/session';

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

export async function POST(request: Request) {
  try {
    await initDb();
    getAuthSessionSecret();
    const body = await request.json();
    const { username, passkey } = body;

    if (!username || typeof username !== 'string' || !username.trim()) {
      return NextResponse.json(
        { success: false, error: 'Unique username is required.' },
        { status: 400 },
      );
    }

    const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (cleanUsername.length < 3) {
      return NextResponse.json(
        { success: false, error: 'Username must be at least 3 alphanumeric characters (a-z, 0-9, _, -).' },
        { status: 400 },
      );
    }
    if (typeof passkey !== 'string' || !passkey.trim()) {
      return NextResponse.json(
        { success: false, error: 'Passkey is required.' },
        { status: 400 },
      );
    }
    const cleanPasskey = passkey.trim();

    const existingUsers = await sql`
      SELECT id, username, passkey, status, role FROM users WHERE LOWER(username) = ${cleanUsername}
    `;

    let user;
    if (existingUsers.length > 0) {
      user = existingUsers[0];
      if (user.status !== 'active') {
        return NextResponse.json(
          { success: false, error: 'This user account has been suspended by Admin.' },
          { status: 403 },
        );
      }

      const passkeyCheck = await verifyPasskey(cleanPasskey, user.passkey);
      if (!passkeyCheck.valid) {
        return NextResponse.json(
          { success: false, error: 'Incorrect passkey for this username.' },
          { status: 401 },
        );
      }
      if (passkeyCheck.needsRehash) {
        await sql`
          UPDATE users SET passkey = ${await hashPasskey(cleanPasskey)} WHERE id = ${user.id}
        `;
      }
    } else {
      const count = await sql`SELECT COUNT(*)::int AS count FROM users`;
      const isFirstAccount = count[0]?.count === 0;
      const hashedPasskey = await hashPasskey(cleanPasskey);
      const created = await sql`
        INSERT INTO users (username, passkey, status, role)
        VALUES (${cleanUsername}, ${hashedPasskey}, 'active', 'user')
        RETURNING id, username, status, role
      `;
      user = created[0];
      await ensureUserData(user.id, isFirstAccount);
    }

    await ensureUserData(user.id, false);
    const response = NextResponse.json({
      success: true,
      user: { id: user.id, username: user.username, status: user.status, role: user.role },
      message: existingUsers.length > 0 ? 'Welcome back!' : 'Account created successfully!',
    });
    setSessionCookie(response, user.id);
    return response;
  } catch (error: unknown) {
    if (isAuthConfigurationError(error)) {
      return NextResponse.json(
        { success: false, error: 'AUTH_SESSION_SECRET must be configured with at least 32 bytes.' },
        { status: 503 },
      );
    }
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
      { success: false, error: isAuthConfigurationError(error) ? (error as Error).message : 'Server error.' },
      { status: isAuthConfigurationError(error) ? 503 : 500 },
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  clearSessionCookie(response);
  return response;
}
