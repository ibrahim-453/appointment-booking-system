import jwt from "jsonwebtoken";
import User from "../../../database/models/user.model.js";
import logger from "../../../utils/logger.js";
import { config } from "../../../config/index.js";
import { UnauthorizedError } from "../../../utils/errors.js";

const generateToken = (user, rememberMe = false) => {
  const accessToken = jwt.sign({ id: user._id,
    email: user.email, type: "access"}, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
  const refreshToken = jwt.sign({ id: user._id,
    email: user.email, type: "refresh"}, config.jwt.refreshSecret, {
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

const refreshAccessToken = async (refreshToken) => {
  const payload = jwt.verify(refreshToken, config.jwt.refreshSecret)

  if(payload.type !== "refresh") {
    throw new UnauthorizedError("Invalid token type");
  }

  const user = await User.findById(payload.id).select("-password").populate("role", "name");

  if (!user) {
    throw new UnauthorizedError("User not found");
  }

  const tokens = generateToken(user)

  logger.info(`Token refreshed for user: ${user.email}`);

  return tokens
}

const getUser = async (data) => {
  const currentUser = await User.findById(data._id ).select("-password").populate("role", "name");
  return {
    user: currentUser
  }
}
export { login, refreshAccessToken , getUser};
