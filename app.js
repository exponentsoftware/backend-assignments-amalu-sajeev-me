import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import { todoRouter } from "./routes/todo.router.js";
import { userRouter } from "./routes/user.router.js";

const app = express();
const DB_STRING = `mongodb://127.0.0.1:27017/todo`;

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use("/todo", todoRouter);
app.use("/user", userRouter);














mongoose.connect(DB_STRING).then(() => {
  //
  console.log("database connected");
  app.listen(3000).on(`listening`, () => console.log("server running at 3000"));
});
