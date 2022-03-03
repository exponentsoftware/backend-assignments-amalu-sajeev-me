import mongoose from "mongoose";
import Joi from "joi";
import { todoSchema } from "./todo.mongo.js";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    validate: {
      validator: (v) => !Joi.string().email().validate(v).error,
      message: "must be a valid email id",
    },
  },
  phone: String,
  createdAt: {
    type: String,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: String,
    default: () => Date.now(),
  },
  role: {
    type: String,
    enum: ["user", "admin"],
  },
  todo: todoSchema,
});

const User = model("User", userSchema);

export { User, userSchema };
