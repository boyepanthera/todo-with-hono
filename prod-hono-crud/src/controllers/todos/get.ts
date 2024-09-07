import { Context } from "hono";
import { drizzle } from "drizzle-orm/d1";
import Todo from "../../models/todo.model";

const getTodos = async (c: Context) => {
  try {
    const db = drizzle(c.env.DB);
    const success = await db.select().from(Todo).all();
    return c.json({
      success: true,
      data: success,
    });
  } catch (error) {
    console.error("ERR", error);
    return c.json({
      success: false,
      message: "Error while fetching  todos",
    });
  }
};

export default getTodos;
