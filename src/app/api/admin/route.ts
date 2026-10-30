import { timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import { getAuthenticatedUser, isAuthConfigurationError } from '@/lib/session';

async function authorizeAdmin(request: Request) {
  const user = await getAuthenticatedUser(request);
  if (!user || user.role !== 'admin') {
    return { user: null, response: NextResponse.json({ success: false, error: 'Admin account required.' }, { status: 401 }) };
  }

  const configuredSecret = process.env.ADMIN_SECRET_KEY;
  if (!configuredSecret || Buffer.byteLength(configuredSecret, 'utf8') < 32) {
    return {
      user: null,
      response: NextResponse.json(
        { success: false, error: 'ADMIN_SECRET_KEY must be configured with at least 32 bytes.' },
        { status: 503 },
      ),
    };
  }

  const provided = Buffer.from(request.headers.get('x-admin-key') || '', 'utf8');
  const expected = Buffer.from(configuredSecret, 'utf8');
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) {
    return { user: null, response: NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 }) };
  }
  return { user, response: null };
}

function configError(error: unknown) {
  return NextResponse.json(
    { success: false, error: error instanceof Error ? error.message : 'Authentication is not configured.' },
    { status: 503 },
  );
}

export async function GET(request: Request) {
  try {
    const auth = await authorizeAdmin(request);
    if (!auth.user) return auth.response;

    const users = await sql`
      SELECT u.id, u.username, u.status, u.role, u."createdAt", COUNT(i.id)::int AS "itemCount"
      FROM users u
      LEFT JOIN inventory i ON u.id = i."userId"
      GROUP BY u.id, u.username, u.status, u.role, u."createdAt"
      ORDER BY u."createdAt" DESC
    `;
    return NextResponse.json({ success: true, users });
  } catch (error) {
    if (isAuthConfigurationError(error)) return configError(error);
    return NextResponse.json({ success: false, error: 'Failed to fetch admin dashboard.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const auth = await authorizeAdmin(request);
    if (!auth.user) return auth.response;

    const body = await request.json();
    const { action } = body;
    const userId = Number(body.userId);
    if (!Number.isSafeInteger(userId) || userId <= 0 || !action) {
      return NextResponse.json({ success: false, error: 'Action and valid userId required.' }, { status: 400 });
    }

    const targetRows = await sql`SELECT id, role FROM users WHERE id = ${userId}`;
    if (!targetRows.length) {
      return NextResponse.json({ success: false, error: 'User not found.' }, { status: 404 });
    }
    if (targetRows[0].role === 'admin' || userId === auth.user.id) {
      return NextResponse.json({ success: false, error: 'Admin accounts cannot be moderated here.' }, { status: 403 });
    }

    if (action === 'block_user') {
      await sql`UPDATE users SET status = 'blocked' WHERE id = ${userId}`;
      return NextResponse.json({ success: true, message: 'User blocked successfully.' });
    }
    if (action === 'unblock_user') {
      await sql`UPDATE users SET status = 'active' WHERE id = ${userId}`;
      return NextResponse.json({ success: true, message: 'User unblocked successfully.' });
    }
    if (action === 'delete_user') {
      await sql`DELETE FROM inventory WHERE "userId" = ${userId}`;
      await sql`DELETE FROM profiles WHERE "userId" = ${userId}`;
      await sql`DELETE FROM users WHERE id = ${userId}`;
      return NextResponse.json({ success: true, message: 'User and associated data purged.' });
    }
    return NextResponse.json({ success: false, error: 'Unknown action.' }, { status: 400 });
  } catch (error) {
    if (isAuthConfigurationError(error)) return configError(error);
    return NextResponse.json({ success: false, error: 'Admin action failed.' }, { status: 500 });
  }
}
