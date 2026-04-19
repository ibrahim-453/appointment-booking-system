import jwt from "jsonwebtoken";
import User from "../../../database/models/user.model.js";
import logger from "../../../utils/logger.js";
import { config } from "../../../config/index.js";

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

  return { accessToken, refreshToken };
};

const login = async (user, data) => {
  const tokens = generateToken(user, data.rememberMe);
  const userWithRole = await User.findOne({ _id: user._id })
    .select("-password")
    .populate("role", "name");

  logger.info(`User logged in: ${user.email}`);

  return {
    userWithRole,
    tokens,
  };
};

export { login };
