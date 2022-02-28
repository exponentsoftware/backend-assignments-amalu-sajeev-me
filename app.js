import express from "express";
import mongoose from "mongoose";
const app = express();
const DB_STRING = `mongodb://127.0.0.1:27017/todo`;

mongoose.connect(DB_STRING).then(() => {
  //
  console.log("database connected");
  app.listen(3000).on(`listening`, () => console.log("server running at 3000"));
});
