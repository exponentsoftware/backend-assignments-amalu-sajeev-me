import { User } from "../schema/user.schema.js";

async function newAccount(req, res) {
  //

  const { body: userDetails } = req;
  const user = new User(userDetails);
  await user.save();
  res.send("account created");
}

async function login(req, res) {
  res.send("logged in");
}
export { newAccount, login };
