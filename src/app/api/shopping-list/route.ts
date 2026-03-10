import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    // A real app would track depleted items over time.
    // For MVP, anything that is expired or quantity = 0 is considered depleted.
    const items = await db`
        SELECT * FROM inventory 
        WHERE quantity <= 0 
        OR ("expirationDate" IS NOT NULL AND "expirationDate" < CURRENT_DATE::text)
        ORDER BY name ASC
    `;

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Failed to fetch shopping list:', error);
    return NextResponse.json({ error: 'Failed to fetch shopping list' }, { status: 500 });
  }
}
