import { sql } from "@vercel/postgres";

export async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS waitlist (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      privacy_accepted BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log(`Created "waitlist" table`);
  return {
    createTable,
  };
}
