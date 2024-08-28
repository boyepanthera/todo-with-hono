import { Context } from "hono";

const createTodo = async (c: Context) => {
  const { todo } = await c.req.json();
  console.log("todo: ", todo);

  if (!todo) {
    return c.json({
      success: false,
      data: null,
      message: "todo required",
    });
  }

  try {
    const { success } = await c.env.DB.prepare(
      "INSERT INTO todos (content) values (?)"
    )
      .bind(todo)
      .run();

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
