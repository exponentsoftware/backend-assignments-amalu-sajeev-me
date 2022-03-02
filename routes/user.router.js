import { Router } from "express";
import { newAccount, login } from "../controller/user.controller.js";
import { passport } from "../middlewares/passport.js";
const userRouter = Router();

userRouter.route("/new").post(newAccount);
userRouter
  .route("/login")
  .post(passport.authenticate("local", { session: false }), login);


export { userRouter };
