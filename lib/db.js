import { Pool } from 'pg';

// Set the SSL config conditionally based on the environment
const sslConfig = process.env.NODE_ENV === 'production' 
  ? { rejectUnauthorized: false } // SSL configuration for production
  : false; // Disable SSL in development (local)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: sslConfig,  // Apply SSL conditionally based on the environment
});

export async function getNames() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM nameselection');
    return result.rows;
  } finally {
    client.release();
  }
}