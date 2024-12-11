import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  // Required for Neon
  },
});

export async function getNames() {
  console.log("Connecting to the database...");
  
  const client = await pool.connect();
  console.log("Connected to the database!");

  try {
    const result = await client.query('SELECT * FROM nameselection');
    console.log("Data fetched:", result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error fetching names:", error);
    throw error;
  } finally {
    client.release();
  }
}