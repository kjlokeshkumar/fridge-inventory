import { neon } from '@neondatabase/serverless';

// The Neon Serverless driver automatically uses process.env.DATABASE_URL
// Make sure this is set in your .env.local file.
// If not present, the neon() function will throw an error when queried.
const sql = neon(process.env.DATABASE_URL || '');

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
