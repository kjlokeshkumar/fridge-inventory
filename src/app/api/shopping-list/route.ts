import { NextRequest, NextResponse } from 'next/server';
import { toTamilTransliteration } from '@/lib/translations';

export async function GET(req: NextRequest) {
  try {
    const { default: db, initDb, purgeOldItems } = await import('@/lib/db');
    await initDb();
    await purgeOldItems();

    const items = await db`
        SELECT * FROM inventory 
        WHERE quantity <= 0 
        OR ("expirationDate" IS NOT NULL AND "expirationDate" < CURRENT_DATE::text)
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
    console.error('Failed to fetch shopping list:', error);
    return NextResponse.json({ error: 'Failed to fetch shopping list' }, { status: 500 });
  }
}
