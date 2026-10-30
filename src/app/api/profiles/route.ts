import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import { getAuthenticatedUser, isAuthConfigurationError } from '@/lib/session';

function authError(error: unknown) {
  const configured = isAuthConfigurationError(error);
  return NextResponse.json(
    { success: false, error: configured ? (error as Error).message : 'Authentication required.' },
    { status: configured ? 503 : 401 },
  );
}

export async function GET(request: Request) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!user) return authError(null);
    const profiles = await sql`
      SELECT id, name, "dietaryPreference", allergies, avatar, "createdAt"
      FROM profiles WHERE "userId" = ${user.id} ORDER BY id ASC
    `;
    return NextResponse.json({ success: true, profiles });
  } catch (error) {
    if (isAuthConfigurationError(error)) return authError(error);
    return NextResponse.json({ success: false, error: 'Failed to fetch user profiles.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!user) return authError(null);
    const body = await request.json();
    const { name, dietaryPreference, allergies, avatar } = body;

    if (typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ success: false, error: 'Profile name is required.' }, { status: 400 });
    }

    const newProfile = await sql`
      INSERT INTO profiles (name, "dietaryPreference", allergies, avatar, "userId")
      VALUES (${name.trim()}, ${dietaryPreference || 'Any'}, ${allergies || ''}, ${avatar || '👤'}, ${user.id})
      RETURNING id, name, "dietaryPreference", allergies, avatar
    `;
    return NextResponse.json({ success: true, profile: newProfile[0] });
  } catch (error) {
    if (isAuthConfigurationError(error)) return authError(error);
    return NextResponse.json({ success: false, error: 'Failed to create user profile.' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!user) return authError(null);
    const body = await request.json();
    const { id, name, dietaryPreference, allergies, avatar } = body;
    const profileId = Number(id);
    if (!Number.isSafeInteger(profileId) || profileId <= 0) {
      return NextResponse.json({ success: false, error: 'Profile ID is required for update.' }, { status: 400 });
    }

    const updatedProfile = await sql`
      UPDATE profiles
      SET name = COALESCE(${typeof name === 'string' && name.trim() ? name.trim() : null}, name),
        "dietaryPreference" = COALESCE(${dietaryPreference || null}, "dietaryPreference"),
        allergies = COALESCE(${allergies ?? null}, allergies),
        avatar = COALESCE(${avatar || null}, avatar)
      WHERE id = ${profileId} AND "userId" = ${user.id}
      RETURNING id, name, "dietaryPreference", allergies, avatar
    `;
    if (!updatedProfile.length) {
      return NextResponse.json({ success: false, error: 'Profile not found.' }, { status: 404 });
    }
    return NextResponse.json({ success: true, profile: updatedProfile[0] });
  } catch (error) {
    if (isAuthConfigurationError(error)) return authError(error);
    return NextResponse.json({ success: false, error: 'Failed to update user profile.' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!user) return authError(null);
    const { searchParams } = new URL(request.url);
    const profileId = Number(searchParams.get('id'));
    if (!Number.isSafeInteger(profileId) || profileId <= 0) {
      return NextResponse.json({ success: false, error: 'Profile ID required.' }, { status: 400 });
    }

    const countRes = await sql`
      SELECT COUNT(*)::int AS count FROM profiles WHERE "userId" = ${user.id}
    `;
    if (countRes[0]?.count <= 1) {
      return NextResponse.json({ success: false, error: 'Cannot delete the only remaining profile.' }, { status: 400 });
    }

    const deleted = await sql`
      DELETE FROM profiles WHERE id = ${profileId} AND "userId" = ${user.id} RETURNING id
    `;
    if (!deleted.length) {
      return NextResponse.json({ success: false, error: 'Profile not found.' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Profile deleted.' });
  } catch (error) {
    if (isAuthConfigurationError(error)) return authError(error);
    return NextResponse.json({ success: false, error: 'Failed to delete profile.' }, { status: 500 });
  }
}
