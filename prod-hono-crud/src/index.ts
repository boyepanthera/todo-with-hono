import { Hono } from "hono";
import { cors } from "hono/cors";
import todosRoutes from "./routes/todos.routes";

type Bindings = {
  DB: D1Database;
  database_id: string;
  database_name: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "/*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["POST", "GET", "OPTIONS", "DELETE", "PATCH"],
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/todos", todosRoutes);

export default app;
