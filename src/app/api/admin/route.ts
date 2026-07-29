import { NextResponse } from 'next/server';
import sql, { initDb } from '@/lib/db';

const getAdminSecret = () => process.env.ADMIN_SECRET_KEY || 'admin123';

export async function GET(request: Request) {
  try {
    await initDb();
    const adminKey = request.headers.get('x-admin-key');
    if (adminKey !== getAdminSecret()) {
      return NextResponse.json({ success: false, error: 'Unauthorized. Invalid Admin Key.' }, { status: 401 });
    }

    // Fetch all users with their inventory count
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const users = await (sql as any)`
      SELECT 
        u.id, 
        u.username, 
        u.status, 
        u.role, 
        u."createdAt",
        COUNT(i.id)::int as "itemCount"
      FROM users u
      LEFT JOIN inventory i ON u.id = i."userId"
      GROUP BY u.id, u.username, u.status, u.role, u."createdAt"
      ORDER BY u."createdAt" DESC
    `;

    return NextResponse.json({ success: true, users });
  } catch (e: unknown) {
    const error = e as Error;
    return NextResponse.json({ success: false, error: error.message || 'Failed to fetch admin dashboard' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await initDb();
    const adminKey = request.headers.get('x-admin-key');
    if (adminKey !== getAdminSecret()) {
      return NextResponse.json({ success: false, error: 'Unauthorized. Invalid Admin Key.' }, { status: 401 });
    }

    const body = await request.json();
    const { action, userId } = body;

    if (!userId || !action) {
      return NextResponse.json({ success: false, error: 'Action and userId required.' }, { status: 400 });
    }

    const uid = parseInt(userId, 10);

    if (action === 'block_user') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (sql as any)`UPDATE users SET status = 'blocked' WHERE id = ${uid}`;
      return NextResponse.json({ success: true, message: 'User blocked successfully.' });
    }

    if (action === 'unblock_user') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (sql as any)`UPDATE users SET status = 'active' WHERE id = ${uid}`;
      return NextResponse.json({ success: true, message: 'User unblocked successfully.' });
    }

    if (action === 'delete_user') {
      // Purge inventory & delete account
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (sql as any)`DELETE FROM inventory WHERE "userId" = ${uid}`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (sql as any)`DELETE FROM users WHERE id = ${uid}`;
      return NextResponse.json({ success: true, message: 'User and all associated inventory data purged.' });
    }

    return NextResponse.json({ success: false, error: 'Unknown action.' }, { status: 400 });
  } catch (e: unknown) {
    const error = e as Error;
    return NextResponse.json({ success: false, error: error.message || 'Admin action failed.' }, { status: 500 });
  }
}
