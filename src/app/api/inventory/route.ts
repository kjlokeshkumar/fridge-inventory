import { NextRequest, NextResponse } from 'next/server';
import { toTamilItemName } from '@/lib/translations';
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
    const { default: db, initDb, purgeStaleInventoryItems } = await import('@/lib/db');
    await initDb();
    await purgeStaleInventoryItems(user.id);

    const items = await db`SELECT * FROM inventory WHERE "userId" = ${user.id} ORDER BY "expirationDate" ASC, name ASC`;

    const lang = req.nextUrl.searchParams.get('lang') || 'English';

    if (lang === 'Tamil' && items.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items.forEach((i: any) => {
        i.name = toTamilItemName(i.name);
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

export async function POST(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return authError();
    const body = await req.json();
    const name = String(body.name || '').trim();
    if (!name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });

    const quantity = Math.max(1, Number(body.quantity) || 1);
    const category = String(body.category || 'Produce').trim();
    const expirationDate = body.expirationDate ? String(body.expirationDate).trim() : null;
    const imageUrl = body.imageUrl ? String(body.imageUrl).trim() : null;

    const { default: db, initDb } = await import('@/lib/db');
    await initDb();

    const [item] = await db`
      INSERT INTO inventory (name, quantity, category, "expirationDate", "imageUrl", "userId")
      VALUES (${name}, ${quantity}, ${category}, ${expirationDate}, ${imageUrl}, ${user.id})
      RETURNING *
    `;

    return NextResponse.json({ success: true, item }, { status: 201 });
  } catch (error) {
    if (isAuthConfigurationError(error)) return authError(error);
    console.error('Failed to create inventory item:', error);
    return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) return authError();
    const { id, quantity } = await req.json();
    const itemId = Number(id);
    if (!Number.isSafeInteger(itemId) || itemId <= 0) {
      return NextResponse.json({ error: 'Valid ID required' }, { status: 400 });
    }

    const newQty = Math.max(0, Number(quantity) || 0);

    const { default: db, initDb } = await import('@/lib/db');
    await initDb();

    if (newQty === 0) {
      await db`DELETE FROM inventory WHERE id = ${itemId} AND "userId" = ${user.id}`;
      return NextResponse.json({ success: true, id: itemId, deleted: true });
    }

    const [updated] = await db`
      UPDATE inventory 
      SET quantity = ${newQty}, "updatedAt" = CURRENT_TIMESTAMP
      WHERE id = ${itemId} AND "userId" = ${user.id}
      RETURNING *
    `;

    return NextResponse.json({ success: true, item: updated });
  } catch (error) {
    if (isAuthConfigurationError(error)) return authError(error);
    console.error('Failed to update inventory item:', error);
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
  }
}
