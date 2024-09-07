import { Context } from "hono";
import { drizzle } from "drizzle-orm/d1";
import Todo from "../../models/todo.model";
import { eq } from "drizzle-orm";

const updateTodos = async (c: Context) => {
  const { todoStatus } = await c.req.json();
  console.log("todoStatus: " + todoStatus);
  const todoId = Number(c.req.param("todoId")) as number;

  try {
    const db = drizzle(c.env.DB);
    let success = await db
      .update(Todo)
      .set({ is_completed: todoStatus })
      .where(eq(Todo.id, todoId))
      .returning({ updated: Todo });

    if (!success.length) {
      c.status(404);
      return c.json({ message: "no todo with id" });
    }

    return c.json({
      success: true,
      message: "Todos updated successfully!!",
    });
  } catch (error) {
    console.log("error", error);

    return c.json({
      success: false,
      message: "Error while updating  todos",
    });
  }
};

export default updateTodos;
