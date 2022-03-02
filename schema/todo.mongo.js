import mongoose from "mongoose";
const { Schema, model } = mongoose;

const todoSchema = new Schema({
  username: String,
  title: String,
  createdAt: String,
  updatedAt: String,
  category: {
    type: String,
    enum: ["work", "hobby", "task"],
  },
  done: Boolean,
});
todoSchema.pre("save", function () {
  console.log("Todo item saved");
});

function createdAtPlugin() {}







const Todo = model("Todo", todoSchema);

export { Todo, todoSchema };
