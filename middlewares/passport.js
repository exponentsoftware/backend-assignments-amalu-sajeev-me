import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../schema/user.schema.js";
import bcrypt from "bcrypt";

const LocalStrategy = new Strategy({ session: false }, verify);
async function verify(username, password, done) {
  const user = await User.findOne({ username });
  if (!user) return done(null, false);
  else return done(null, user);
}

passport.use("local", LocalStrategy);

export { passport };