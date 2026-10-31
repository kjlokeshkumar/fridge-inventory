import type { NextResponse } from 'next/server';
import sql, { initDb } from '@/lib/db';
import {
  AUTH_COOKIE_NAME,
  AUTH_SESSION_MAX_AGE_SECONDS,
  createSessionToken,
  verifySessionToken,
} from '@/lib/session-token';

export { createSessionToken, verifySessionToken } from '@/lib/session-token';

export interface AuthenticatedUser {
  id: number;
  username: string;
  email: string | null;
  displayName: string | null;
  status: string;
  role: string;
}

export function getAuthSessionSecret(): string {
  const secret = process.env.AUTH_SESSION_SECRET;
  if (!secret || Buffer.byteLength(secret, 'utf8') < 32) {
    throw new Error('AUTH_SESSION_SECRET must be configured with at least 32 bytes.');
  }
  return secret;
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

export async function getAuthenticatedUser(request: Request): Promise<AuthenticatedUser | null> {
  const secret = getAuthSessionSecret();
  const token = readCookie(request, AUTH_COOKIE_NAME);
  const session = token && verifySessionToken(token, secret);
  if (!session) return null;

  await initDb();
  // The role and account status are read from the database, not trusted from the cookie.
  const users = await sql`
    SELECT id, username, email, "displayName", status, role
    FROM users WHERE id = ${session.userId}
  `;
  const user = users[0] as AuthenticatedUser | undefined;
  return user?.status === 'active' ? user : null;
}

export function setSessionCookie(response: NextResponse, userId: number): void {
  response.cookies.set(AUTH_COOKIE_NAME, createSessionToken(userId, getAuthSessionSecret()), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: AUTH_SESSION_MAX_AGE_SECONDS,
  });
}

export function clearSessionCookie(response: NextResponse): void {
  response.cookies.set(AUTH_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
}

export function isAuthConfigurationError(error: unknown): boolean {
  return error instanceof Error && error.message.startsWith('AUTH_SESSION_SECRET');
}
