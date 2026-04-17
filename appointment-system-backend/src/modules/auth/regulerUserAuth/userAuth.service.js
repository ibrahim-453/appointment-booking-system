import Role from "../../../database/models/role.model.js";
import User from "../../../database/models/user.model.js";
import { ConflictError } from "../../../utils/errors.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import logger from "../../../utils/logger.js";
import { config } from "../../../config/index.js";

const register = async (data) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new ConflictError("Email already exists");
  }

  const password = await bcrypt.hash(data.password, 12);
  const userRole = await Role.findOne({ name: "user" });
  const user = await User.create({
    name: data.name,
    email: data.email,
    password,
    phone: data.phone,
    role: userRole._id,
  });
  logger.info(`User registered with email: ${user.email}`);

  return user;
};

const generateToken = (user, rememberMe = false) => {
  const payload = {
    id: user._id,
    email: user.email,
  };
  const accessToken = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
  const refreshToken = jwt.sign(payload, config.jwt.refreshSecret, {
    expiresIn: rememberMe
      ? config.jwt.rememberMeExpiry
      : config.jwt.refreshSecretExpiry,
  });

  return { accessToken, refreshToken}
};

const login = async (user, data) => {
  const tokens = generateToken(user, data.rememberMe);
  const userWithRole = await User.findOne({ _id: user._id })
    .select("-password")
    .populate({
      path: "role",
      select: "name",
    });

  logger.info(`User logged in: ${user.email}`);

  return {
    userWithRole,
    tokens,
  };
};
export { register, login };
