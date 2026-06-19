import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/_database/drizzle";

/** Centralized configuration for betterAuth, adapt it to your needs and use it as a reference in case you need to migrate this to a custom auth service
 * https://better-auth.com/docs/concepts/session-management */
/* https://better-auth.com/docs/authentication/email-password */

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
  },
  plugins: [nextCookies()],
});
