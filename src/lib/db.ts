import { neon } from '@neondatabase/serverless';

let cachedSql: any = null;

// We use a proxy function to prevent the entire Next.js API route from crashing on module load 
// if the environment variable is missing or malformed (like accidental quotes), allowing our API to catch it gracefully and return JSON.
const sql = ((strings: TemplateStringsArray, ...values: any[]) => {
  if (!cachedSql) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is missing on Vercel!");
    }
    try {
      // Create the connection using the URL
      cachedSql = neon(process.env.DATABASE_URL);
    } catch (e: any) {
      // neon throws a TypeError if the URL has quotes around it, spacing, or invalid protocols
      throw new Error(`Neon DB Connection error (Check your Vercel Environment Variable for extra quotes/spaces!): ${e.message}`);
    }
  }
  return cachedSql(strings, ...values);
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
        quantity INTEGER NOT NULL DEFAULT 1,
        category VARCHAR(100),
        expirationDate VARCHAR(25),
        imageUrl TEXT,
        addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Failed to initialize database", error);
    throw error;
  }
}

export default sql;
