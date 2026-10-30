import { NextRequest, NextResponse } from 'next/server';
import { toTamilTransliteration } from '@/lib/translations';
import { getAuthenticatedUser, isAuthConfigurationError } from '@/lib/session';

function authError(error?: unknown) {
  const configured = isAuthConfigurationError(error);
  return NextResponse.json(
    { error: configured ? (error as Error).message : 'Authentication required.' },
    { status: configured ? 503 : 401 },
  );
}

export async function GET(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return authError();
    const { default: db, initDb, purgeOldItems } = await import('@/lib/db');
    await initDb();
    await purgeOldItems(user.id);

    const items = await db`SELECT * FROM inventory WHERE "userId" = ${user.id} ORDER BY "expirationDate" ASC, name ASC`;

    const lang = req.nextUrl.searchParams.get('lang') || 'English';

    if (lang === 'Tamil' && items.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items.forEach((i: any) => {
        i.name = toTamilTransliteration(i.name);
      });
    }

    return NextResponse.json({ items });
  } catch (error) {
    if (isAuthConfigurationError(error)) return authError(error);
    console.error('Failed to fetch inventory:', error);
    return NextResponse.json({ error: 'Failed to fetch inventory' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return authError();
    const { id } = await req.json();
    const itemId = Number(id);
    if (!Number.isSafeInteger(itemId) || itemId <= 0) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    const { default: db, initDb } = await import('@/lib/db');
    await initDb();
    const result = await db`DELETE FROM inventory WHERE id = ${itemId} AND "userId" = ${user.id}`;

    if (result.length > 0) return NextResponse.json({ success: true, id: itemId });
    return NextResponse.json({ error: 'Item not found.' }, { status: 404 });
  } catch (error) {
    if (isAuthConfigurationError(error)) return authError(error);
    console.error('Failed to delete item:', error);
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}
