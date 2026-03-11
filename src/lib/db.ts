import { neon } from '@neondatabase/serverless';

// Make sure this is set in your .env.local file (and in your Vercel Dashboard!).
// We use a fallback function to prevent the entire Next.js API route from crashing on module load 
// if the environment variable is missing, allowing our API to catch it gracefully and return JSON.
const sql = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : (((...args: any[]) => {
      throw new Error("DATABASE_URL environment variable is missing on Vercel!");
    }) as any);

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
