import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import bcrypt from "bcrypt";
import User from "../database/models/user.model.js";
import logger from "../utils/logger.js";
import { config } from "./index.js";

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email }).populate("role", "name");
      if (!user) {
        logger.warn(`Login attempt failed: User not found - ${email}`);
        return done(null, false, { message: "Incorrect email or password." });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        logger.warn(`Login attempt failed: Invalid password - ${email}`);
        return done(null, false, { message: "Invalid credentials" });
      }
      logger.info(`User logged in successfully: ${email}`);
      return done(null, user);
    } catch (error) {
      logger.error("Error occurred while authenticating user:", error);
      return done(error);
    }
  },
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt.secret,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.id).select("-password").populate("role", "name");

    if (!user) {
      logger.warn(
        `JWT authentication failed: User not found - ID: ${payload.id}`,
      );
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    logger.error("Error in JWT strategy:", error);
    return done(error, false);
  }
});

const initializePassport = () => {
  passport.use("local", localStrategy);
  passport.use("jwt", jwtStrategy);
  logger.info("Passport strategies initialized");
};

export {
    passport,
    initializePassport
}