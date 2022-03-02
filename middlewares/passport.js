import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy } from "passport-local";
import { User } from "../schema/user.schema.js";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import bcrypt from "bcrypt";

const { TOKEN_SECRET } = process.env;

const LocalStrategy = new Strategy({ session: false }, verifyLocal);
async function verifyLocal(username, password, done) {
  const user = await User.findOne({ username });
  if (!user) return done(null, false);
  else return done(null, user);
}

const jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: TOKEN_SECRET,
  },
  function verifyJWT(jwt_payload, done) {
    console.log(jwt_payload);
    const { username } = jwt_payload;
    User.findOne({ username })
      .then((user) => {
        if (!user) return done(null, false);
        else return done(null, user);
      })
      .catch((e) => done(e, false));
  }
);

passport.use("login", LocalStrategy);
passport.use("jwt", jwtStrategy);


export { passport };