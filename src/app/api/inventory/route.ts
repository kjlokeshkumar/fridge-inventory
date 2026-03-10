import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const items = await db`SELECT * FROM inventory ORDER BY "expirationDate" ASC, name ASC`;
    return NextResponse.json({ items });
  } catch (error) {
    console.error('Failed to fetch inventory:', error);
    return NextResponse.json({ error: 'Failed to fetch inventory' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    const result = await db`DELETE FROM inventory WHERE id = ${id}`;
    
    if (result.length > 0) {
      // If we used RETURNING we could check rows, otherwise just assume success if no error thrown
      // or we can just return success true
      return NextResponse.json({ success: true, id });
    } else {
      // Actually standard DELETE without RETURNING just returns an empty array in the client, 
      // but if no error is thrown, we assume it is successful for this MVP.
      return NextResponse.json({ success: true, id });
    }
  } catch (error) {
    console.error('Failed to delete item:', error);
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}
