import { Router } from "express";
import { addTodo } from "./todo.controller.js";

const todoRouter = Router();

todoRouter.post("/", addTodo);

export { todoRouter };
