import { Todo } from "./todo.mongo.js";

async function addTodo(req, res) {
  //
  const { body: todoDetails } = req;
  const todo = new Todo(todoDetails);
  await todo.save();
  res.send(`${todo.title} added`);
}

export { addTodo };
