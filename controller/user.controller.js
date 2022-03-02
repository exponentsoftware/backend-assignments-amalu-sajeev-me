import { User } from "../schema/user.schema.js";
import jwt from "jsonwebtoken";
async function newAccount(req, res) {
  //

  const { body: userDetails } = req;
  const user = new User(userDetails);
  await user.save();
  const { TOKEN_SECRET } = process.env;
  const token = await jwt.sign({ username: user.username }, TOKEN_SECRET, {
    expiresIn: "5m",
  });

  console.log(user, token);
  res.send("account created");
}

async function login(req, res) {
  res.send("logged in");
}
export { newAccount, login };
