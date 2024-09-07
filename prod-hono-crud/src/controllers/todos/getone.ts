import { Context } from "hono";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import Todo from "../../models/todo.model";
const getTodoById = async (c: Context) => {
  const todoId = Number(c.req.param("todoId")) as number;

  try {
    const db = drizzle(c.env.DB);
    const result = await db.select().from(Todo).where(eq(Todo.id, todoId));

    if (!result.length) {
      c.status(404);
      return c.json({
        success: false,
        data: null,
        message: "Todo not found",
      });
    }

    return c.json({
      success: true,
      data: result[0],
    });
  } catch (error) {
    return c.json({
      success: false,
      message: "Error while updating  todos",
    });
  }
};

export default getTodoById;
