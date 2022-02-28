import { Router } from "express";
import {
  addTodo,
  allTodos,
  todoDetails,
  updateTodo,
} from "./todo.controller.js";

const todoRouter = Router();

todoRouter.route("/").post(addTodo).get(allTodos);
todoRouter.route("/:todoID").get(todoDetails).patch(updateTodo);

export { todoRouter };
