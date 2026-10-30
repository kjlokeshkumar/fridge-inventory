import { NextRequest, NextResponse } from 'next/server';
import { toTamilTransliteration } from '@/lib/translations';
import { getAuthenticatedUser, isAuthConfigurationError } from '@/lib/session';

export async function GET(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
    const { default: db, initDb, purgeStaleInventoryItems } = await import('@/lib/db');
    await initDb();
    await purgeStaleInventoryItems(user.id);

    const items = await db`
        SELECT * FROM inventory 
        WHERE "userId" = ${user.id}
        AND (quantity <= 0
        OR ("expirationDate" IS NOT NULL AND "expirationDate" < CURRENT_DATE::text))
        ORDER BY name ASC
    `;

    const lang = req.nextUrl.searchParams.get('lang') || 'English';
    if (lang === 'Tamil' && items.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items.forEach((i: any) => {
        i.name = toTamilTransliteration(i.name);
      });
    }

    return NextResponse.json({ items });
  } catch (error) {
    if (isAuthConfigurationError(error)) {
      return NextResponse.json({ error: (error as Error).message }, { status: 503 });
    }
    console.error('Failed to fetch shopping list:', error);
    return NextResponse.json({ error: 'Failed to fetch shopping list' }, { status: 500 });
  }
}
