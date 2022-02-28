import { Todo } from "./todo.mongo.js";

async function addTodo(req, res) {
  //
  const { body: todoDetails } = req;
  const todo = new Todo(todoDetails);
  await todo.save();
  res.send(`${todo.title} added`);
}


async function allTodos(req, res) {
  const todos = await Todo.find({});
  res.send(todos);
}

async function todoDetails(req, res) {
  const { todoID } = req.params;
  const todo = await Todo.findById(todoID);
  res.send(todo);
}

async function updateTodo(req, res) {
  const { todoID } = req.params;
  const { title, done } = req.body;
  // Todo.findByIdAndUpdate()
  const todo = await Todo.findById(todoID);
  todo.title = title;
  todo.done = done;
  await todo.save();
  res.send("todo updated");
  console.log(todo);
}

export { addTodo, allTodos, todoDetails, updateTodo };
