import mongoose from "mongoose";
import { todoSchema } from "./todo.mongo.js";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  phone: String,
  createdAt: String,
  updatedAt: String,
  role: {
    type: String,
    enum: ["user", "admin"],
  },
  todo: todoSchema,
});

const User = model("User", userSchema);

export { User, userSchema };
