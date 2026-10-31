import { neon } from '@neondatabase/serverless';
import { verifyPasskey } from '@/lib/passkeys';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cachedSql: any = null;

// We use a proxy function to prevent the entire Next.js API route from crashing on module load 
// if the environment variable is missing or malformed (like accidental quotes), allowing our API to catch it gracefully and return JSON.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sql = ((strings: TemplateStringsArray, ...values: any[]) => {
  if (!cachedSql) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is missing on Vercel!");
    }
    try {
      const rawUrl = process.env.DATABASE_URL || '';
      const cleanUrl = rawUrl.replace(/\0/g, '').replace(/[\r\n]/g, '').trim().replace(/^['"]|['"]$/g, '').trim();
      // Create the connection using the cleaned URL
      cachedSql = neon(cleanUrl);
    } catch (e: unknown) {
      const error = e as Error;
      // neon throws a TypeError if the URL has quotes around it, spacing, or invalid protocols
      throw new Error(`Neon DB Connection error (Check your Vercel Environment Variable for extra quotes/spaces!): ${error.message}`);
    }
  }
  return cachedSql(strings, ...values);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

// Since Vercel serverless functions shouldn't run arbitrary DDL on every request,
// we'll create an initialization function that you can call once as a setup step,
// or check for existence instead of running it on DB connection.
export async function initDb() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        passkey VARCHAR(255),
        "googleSub" VARCHAR(255),
        email VARCHAR(320),
        "displayName" VARCHAR(255),
        status VARCHAR(20) DEFAULT 'active',
        role VARCHAR(20) DEFAULT 'user',
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`ALTER TABLE users ALTER COLUMN passkey DROP NOT NULL`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS "googleSub" VARCHAR(255)`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS email VARCHAR(320)`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS "displayName" VARCHAR(255)`;
    await sql`
      CREATE UNIQUE INDEX IF NOT EXISTS users_google_sub_unique_idx ON users ("googleSub")
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS inventory (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        "sourashtraName" VARCHAR(255),
        quantity INTEGER NOT NULL DEFAULT 1,
        category VARCHAR(100),
        expirationDate VARCHAR(25),
        imageUrl TEXT,
        "userId" INTEGER,
        addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    // Safely add column if it doesn't exist for existing databases
    await sql`
      ALTER TABLE inventory ADD COLUMN IF NOT EXISTS "sourashtraName" VARCHAR(255)
    `;

    // Create user profiles table
    await sql`
      CREATE TABLE IF NOT EXISTS profiles (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        "dietaryPreference" VARCHAR(100) DEFAULT 'Any',
        allergies VARCHAR(255) DEFAULT '',
        avatar VARCHAR(50) DEFAULT '👤',
        "userId" INTEGER,
        "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Add ownership columns to installations created before account scoping.
    await sql`
      ALTER TABLE inventory ADD COLUMN IF NOT EXISTS "userId" INTEGER
    `;
    await sql`ALTER TABLE inventory ALTER COLUMN "userId" DROP DEFAULT`;
    await sql`ALTER TABLE profiles ADD COLUMN IF NOT EXISTS "userId" INTEGER`;

    // Preserve legacy household data by assigning it to the oldest account.
    // When no account exists yet, the first account created adopts these rows.
    await sql`
      UPDATE profiles
      SET "userId" = (SELECT MIN(id) FROM users)
      WHERE "userId" IS NULL AND EXISTS (SELECT 1 FROM users)
    `;
    await sql`
      UPDATE inventory
      SET "userId" = (SELECT MIN(id) FROM users)
      WHERE "userId" IS NULL AND EXISTS (SELECT 1 FROM users)
    `;
    await sql`
      UPDATE inventory
      SET "userId" = (SELECT MIN(id) FROM users)
      WHERE "userId" = 1
        AND NOT EXISTS (SELECT 1 FROM users WHERE id = 1)
        AND EXISTS (SELECT 1 FROM users)
    `;

    // Disable the legacy built-in admin credential so it cannot survive the
    // removal of the old hardcoded bootstrap account.
    const seededAdmin = await sql`
      SELECT id, passkey FROM users
      WHERE username = 'admin' AND role = 'admin' AND status = 'active' AND passkey IS NOT NULL
      LIMIT 1
    `;
    if (seededAdmin[0] && (await verifyPasskey('admin123', seededAdmin[0].passkey)).valid) {
      await sql`UPDATE users SET status = 'blocked' WHERE id = ${seededAdmin[0].id}`;
    }
    
    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Failed to initialize database", error);
    throw error;
  }
}

export async function purgeStaleInventoryItems(userId: number) {
  try {
    const deletedItems = await sql`
      DELETE FROM inventory 
      WHERE "userId" = ${userId}
        AND (
          "addedAt" < NOW() - INTERVAL '14 days'
          OR ("expirationDate" IS NOT NULL AND "expirationDate" < CURRENT_DATE::text)
        )
      RETURNING id
    `;
    if (deletedItems.length > 0) {
      console.log(`Purged ${deletedItems.length} expired or stale inventory item(s) for user ${userId}.`);
    }
  } catch (error) {
    console.error("Failed to purge expired or stale inventory items:", error);
    throw error;
  }
}

export default sql;
