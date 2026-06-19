import { integer, text, boolean, pgTable, timestamp } from "drizzle-orm/pg-core"
import { user } from "./auth-schema"

export const todo = pgTable("todo", {
  id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  userId: text("user_id").notNull().references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
  deletedAt: timestamp("deleted_at"),
})
