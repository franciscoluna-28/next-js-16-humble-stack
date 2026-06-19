import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as authSchema from "./schema/auth-schema";
import { todo } from "./schema/app-schema";

const schema = {
  ...authSchema,
  todo,
};

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

export const db = drizzle(pool, { schema });
