import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { account, session, user, verification } from "./schema/auth-schema";
import { todo } from "./schema/app-schema";

const schema = {
  user,
  session,
  account,
  verification,
  todo,
};

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

export const db = drizzle(pool, { schema });
