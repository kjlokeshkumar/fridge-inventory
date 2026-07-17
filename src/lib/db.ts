import { neon } from '@neondatabase/serverless';

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
      CREATE TABLE IF NOT EXISTS inventory (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        "sourashtraName" VARCHAR(255),
        quantity INTEGER NOT NULL DEFAULT 1,
        category VARCHAR(100),
        expirationDate VARCHAR(25),
        imageUrl TEXT,
        addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    // Safely add column if it doesn't exist for existing databases
    await sql`
      ALTER TABLE inventory ADD COLUMN IF NOT EXISTS "sourashtraName" VARCHAR(255)
    `;
    
    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Failed to initialize database", error);
    throw error;
  }
}

export async function purgeOldItems() {
  try {
    await sql`
      DELETE FROM inventory 
      WHERE "addedAt" < NOW() - INTERVAL '14 days'
    `;
    console.log("Successfully purged inventory items older than 2 weeks.");
  } catch (error) {
    console.error("Failed to purge old inventory items:", error);
  }
}

export default sql;
