import mongoose from "mongoose";
const { Schema, model } = mongoose;

const todoSchema = new Schema({
  item: {
    type: [
      {
        name: String,
        description: String,
      },
    ],
  },
});

const Todo = model("Todo", todoSchema);

export { Todo };
