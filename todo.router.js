import { Router } from "express";
import { addTodo, allTodos, todoDetails } from "./todo.controller.js";

const todoRouter = Router();

todoRouter.route("/").post(addTodo).get(allTodos);
todoRouter.route("/:todoID").get(todoDetails);

export { todoRouter };
