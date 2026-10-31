import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import {
  clearSessionCookie,
  getAuthenticatedUser,
  isAuthConfigurationError,
} from '@/lib/session';

export const runtime = 'nodejs';

export async function DELETE(request: Request) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Sign in to delete your account.' },
        { status: 401 },
      );
    }

    const deleted = await sql`
      WITH deleted_inventory AS (
        DELETE FROM inventory WHERE "userId" = ${user.id} RETURNING id
      ),
      deleted_profiles AS (
        DELETE FROM profiles WHERE "userId" = ${user.id} RETURNING id
      ),
      deleted_user AS (
        DELETE FROM users WHERE id = ${user.id} RETURNING id
      )
      SELECT id FROM deleted_user
    `;

    if (deleted.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Account not found. Please sign in again.' },
        { status: 404 },
      );
    }

    const response = NextResponse.json({ success: true });
    clearSessionCookie(response);
    return response;
  } catch (error: unknown) {
    if (isAuthConfigurationError(error)) {
      return NextResponse.json(
        { success: false, error: 'Account deletion is temporarily unavailable.' },
        { status: 503 },
      );
    }
    console.error('Account deletion failed:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to delete your account. Please try again.' },
      { status: 500 },
    );
  }
}
