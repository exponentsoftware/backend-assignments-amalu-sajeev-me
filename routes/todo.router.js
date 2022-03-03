import { Router } from "express";
import { passport } from "../middlewares/passport.js";
// import passport from "passport";
import {
  addTodo,
  allTodos,
  todoDetails,
  updateTodo,
  removeTodo,
} from "../controller/todo.controller.js";

const todoRouter = Router();

todoRouter
  .route("/")
  .post(addTodo)
  .get(passport.authenticate("jwt", { session: false }), allTodos);
todoRouter
  .route("/:todoID")
  .get(passport.authenticate("jwt", { session: false }), todoDetails)
  .patch(passport.authenticate("jwt", { session: false }), updateTodo)
  .delete(passport.authenticate("jwt", { session: false }), removeTodo);

export { todoRouter };
