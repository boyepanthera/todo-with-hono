import { Context } from "hono";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import Todo from "../../models/todo.model";

const deleteTodo = async (c: Context) => {
  const todoId = Number(c.req.param("todoId")) as number;
  try {
    const db = drizzle(c.env.DB);
    const success = await db
      .delete(Todo)
      .where(eq(Todo.id, todoId))
      .returning();

    if (!success) {
      return c.json({
        success: true,
        data: {
          deleted: false,
        },
        message: "Unable to delete. Please try later",
      });
    }

    return c.json({
      success: true,
      data: {
        deleted: true,
      },
    });
  } catch (error) {
    console.log("error", error);
    return c.json({
      success: false,
      data: null,
      message: "Server Error",
    });
  }
};

export default deleteTodo;
