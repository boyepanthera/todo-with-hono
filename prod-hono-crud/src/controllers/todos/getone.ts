import { Context } from "hono";

const getTodoById = async (c: Context) => {
  const todoId = c.req.param("todoId");
  console.log("todoId: ", todoId);

  try {
    const { success, results } = await c.env.DB.prepare(
      "SELECT * FROM todos WHERE id = ?"
    )
      .bind(todoId)
      .run();

    // console.log("success", success, results);

    if (!results.length) {
      c.status(404);
      return c.json({
        success: false,
        data: null,
        message: "Todo not found",
      });
    }

    return c.json({
      success: true,
      data: results[0],
    });
  } catch (error) {
    return c.json({
      success: false,
      message: "Error while updating  todos",
    });
  }
};

export default getTodoById;
