import { NextResponse } from 'next/server';
import sql, { initDb } from '@/lib/db';

export async function GET() {
  try {
    await initDb();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const profiles = await (sql as any)`
      SELECT id, name, "dietaryPreference", allergies, avatar, "createdAt"
      FROM profiles
      ORDER BY id ASC
    `;
    return NextResponse.json({ success: true, profiles });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch user profiles.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await initDb();
    const body = await request.json();
    const { name, dietaryPreference, allergies, avatar } = body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Profile name is required.' },
        { status: 400 }
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newProfile = await (sql as any)`
      INSERT INTO profiles (name, "dietaryPreference", allergies, avatar)
      VALUES (
        ${name.trim()},
        ${dietaryPreference || 'Any'},
        ${allergies || ''},
        ${avatar || '👤'}
      )
      RETURNING id, name, "dietaryPreference", allergies, avatar
    `;

    return NextResponse.json({ success: true, profile: newProfile[0] });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to create user profile.' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    await initDb();
    const body = await request.json();
    const { id, name, dietaryPreference, allergies, avatar } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Profile ID is required for update.' },
        { status: 400 }
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedProfile = await (sql as any)`
      UPDATE profiles
      SET 
        name = COALESCE(${name?.trim() || null}, name),
        "dietaryPreference" = COALESCE(${dietaryPreference || null}, "dietaryPreference"),
        allergies = COALESCE(${allergies || null}, allergies),
        avatar = COALESCE(${avatar || null}, avatar)
      WHERE id = ${id}
      RETURNING id, name, "dietaryPreference", allergies, avatar
    `;

    return NextResponse.json({ success: true, profile: updatedProfile[0] });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to update user profile.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await initDb();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Profile ID required' }, { status: 400 });
    }

    // Ensure we do not delete the last remaining profile
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const countRes = await (sql as any)`SELECT COUNT(*)::int as count FROM profiles`;
    if (countRes && countRes[0]?.count <= 1) {
      return NextResponse.json({ success: false, error: 'Cannot delete the only remaining profile.' }, { status: 400 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (sql as any)`DELETE FROM profiles WHERE id = ${parseInt(id, 10)}`;
    return NextResponse.json({ success: true, message: 'Profile deleted.' });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to delete profile' }, { status: 500 });
  }
}
