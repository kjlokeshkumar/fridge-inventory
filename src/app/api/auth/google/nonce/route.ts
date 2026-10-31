import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';

export async function POST() {
  const nonce = randomBytes(32).toString('base64url');
  const response = NextResponse.json({ success: true, nonce });
  response.cookies.set('fridge_google_nonce', nonce, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/api/auth',
    maxAge: 5 * 60,
  });
  return response;
}
