import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

// TODO: Double check .env file configuration in Drizzle documentation and make sure it is correct.
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const db = drizzle(pool);