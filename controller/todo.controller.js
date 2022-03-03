import { Todo } from "../schema/todo.mongo.js";

async function addTodo(req, res) {
  //
  const { body: todoDetails } = req;
  const createdAt = new Date().toDateString();
  const todo = new Todo({ ...todoDetails, createdAt });
  await todo.save();
  res.send(`${todo.title} added`);
}

async function allTodos(req, res) {
  const { username, role } = req.user;
  const todos =
    role === "user" ? await Todo.find({ username }) : await Todo.find({});
  res.send(todos);
}

async function todoDetails(req, res) {
  const { todoID } = req.params;
  const todo = await Todo.findById(todoID);
  res.send(todo);
}

async function updateTodo(req, res) {
  const { todoID } = req.params;
  const { title, done, category } = req.body;
  const updatedAt = new Date().toDateString();
  const todo = await Todo.findById(todoID);
  todo.title = title;
  todo.done = done;
  todo.updatedAt = updatedAt;
  todo.category = category;
  await todo.save();
  res.send("todo updated");
  console.log(todo);
}

async function removeTodo(req, res) {
  const { todoID } = req.params;
  await Todo.findByIdAndDelete(todoID);
  res.send("todo deleted");
}

export { addTodo, allTodos, todoDetails, updateTodo, removeTodo };
