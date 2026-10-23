import { NextRequest, NextResponse } from 'next/server';
import { toTamilTransliteration } from '@/lib/translations';

export async function GET(req: NextRequest) {
  try {
    const { default: db, initDb, purgeOldItems } = await import('@/lib/db');
    await initDb();
    await purgeOldItems();

    const userIdParam = req.nextUrl.searchParams.get('userId') || req.headers.get('x-user-id') || '1';
    const userId = parseInt(userIdParam, 10);

    const items = await db`SELECT * FROM inventory WHERE "userId" = ${userId} ORDER BY "expirationDate" ASC, name ASC`;

    const lang = req.nextUrl.searchParams.get('lang') || 'English';

    if (lang === 'Tamil' && items.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items.forEach((i: any) => {
        i.name = toTamilTransliteration(i.name);
      });
    }

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Failed to fetch inventory:', error);
    return NextResponse.json({ error: 'Failed to fetch inventory' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id, userId: bodyUserId } = await req.json();
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    const userIdParam = req.nextUrl.searchParams.get('userId') || req.headers.get('x-user-id') || bodyUserId || '1';
    const userId = parseInt(userIdParam, 10);

    const { default: db, initDb } = await import('@/lib/db');
    await initDb();
    const result = await db`DELETE FROM inventory WHERE id = ${id} AND "userId" = ${userId}`;

    if (result.length > 0) {
      return NextResponse.json({ success: true, id });
    } else {
      return NextResponse.json({ success: true, id });
    }
  } catch (error) {
    console.error('Failed to delete item:', error);
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}
