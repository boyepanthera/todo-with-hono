import { drizzle } from "drizzle-orm/d1";
import { Context } from "hono";
import Todo from "../../models/todo.model";

const createTodo = async (c: Context) => {
  const { todo } = await c.req.json();
  if (!todo) {
    return c.json({
      success: false,
      data: null,
      message: "todo required",
    });
  }

  try {
    const db = drizzle(c.env.DB);
    const success = await db.insert(Todo).values({
      content: todo,
    });

    console.log("success", success);

    if (!success) {
      return c.json(
        {
          success: false,
          message: "Error while adding new todo",
        },
        { status: 500 }
      );
    }
    return c.json(
      {
        success: true,
        message: "Added Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("err", error);
    return c.json({
      success: false,
      data: null,
      message: "Failed to create todo",
    });
  }
};

export default createTodo;
