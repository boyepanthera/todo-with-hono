import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

const Todo = sqliteTable("todos", {
  id: integer("id"),
  content: text("content"),
  is_completed: integer("is_completed", { mode: "boolean" }),
  created_at: text("created_at").default(
    sql`strftime('%Y-%m-%d %H:%M:%S', 'now')`
  ),
  // Add other columns as needed...
});

export default Todo;
