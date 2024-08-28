import { Hono } from "hono";
import createTodos from "../controllers/todos/create";
import updateTodos from "../controllers/todos/update";
import getTodos from "../controllers/todos/get";
import deleteTodo from "../controllers/todos/delete";
import getTodoById from "../controllers/todos/getone";

const todosRoutes = new Hono();

todosRoutes.post("/", createTodos);
todosRoutes.get("/", getTodos);
todosRoutes.get("/:todoId", getTodoById);
todosRoutes.patch("/:todoId", updateTodos);
todosRoutes.delete("/:todoId", deleteTodo);

export default todosRoutes;
