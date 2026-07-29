import { NextResponse } from 'next/server';
import sql, { initDb } from '@/lib/db';

export async function POST(request: Request) {
  try {
    await initDb();
    const body = await request.json();
    const { username, passkey } = body;

    if (!username || typeof username !== 'string' || !username.trim()) {
      return NextResponse.json(
        { success: false, error: 'Unique username is required.' },
        { status: 400 }
      );
    }

    const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (cleanUsername.length < 3) {
      return NextResponse.json(
        { success: false, error: 'Username must be at least 3 alphanumeric characters (a-z, 0-9, _, -).' },
        { status: 400 }
      );
    }

    const cleanPasskey = (passkey && typeof passkey === 'string') ? passkey.trim() : '1234';

    // Check if user already exists
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const existingUsers = await (sql as any)`
      SELECT id, username, passkey, status, role
      FROM users
      WHERE LOWER(username) = ${cleanUsername}
    `;

    if (existingUsers && existingUsers.length > 0) {
      const user = existingUsers[0];
      if (user.status === 'blocked') {
        return NextResponse.json(
          { success: false, error: 'This user account has been suspended by Admin for policy or modesty violations.' },
          { status: 403 }
        );
      }
      if (user.passkey !== cleanPasskey) {
        return NextResponse.json(
          { success: false, error: 'Incorrect passkey for this username.' },
          { status: 401 }
        );
      }
      return NextResponse.json({ success: true, user, message: 'Welcome back!' });
    }

    // Register new unique user
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newUserRes = await (sql as any)`
      INSERT INTO users (username, passkey, status, role)
      VALUES (${cleanUsername}, ${cleanPasskey}, 'active', 'user')
      RETURNING id, username, passkey, status, role
    `;

    return NextResponse.json({ success: true, user: newUserRes[0], message: 'Account created successfully!' });
  } catch (e: unknown) {
    const error = e as Error;
    return NextResponse.json(
      { success: false, error: error.message || 'Authentication failed.' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await initDb();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const username = searchParams.get('username');

    if (!userId && !username) {
      return NextResponse.json({ success: false, error: 'Missing parameter' }, { status: 400 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let res: any[] = [];
    if (userId) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res = await (sql as any)`SELECT id, username, status, role FROM users WHERE id = ${parseInt(userId, 10)}`;
    } else if (username) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res = await (sql as any)`SELECT id, username, status, role FROM users WHERE LOWER(username) = ${username.toLowerCase().trim()}`;
    }

    if (res && res.length > 0) {
      const user = res[0];
      if (user.status === 'blocked') {
        return NextResponse.json({ success: false, isBlocked: true, error: 'Account suspended' });
      }
      return NextResponse.json({ success: true, user });
    }

    return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
  } catch {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
