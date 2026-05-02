import jwt from "jsonwebtoken";
import User from "../../../database/models/user.model.js";
import logger from "../../../utils/logger.js";
import { config } from "../../../config/index.js";
import { UnauthorizedError } from "../../../utils/errors.js";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import Role from "../../../database/models/role.model.js";
import bcrypt from 'bcrypt'

const client = new OAuth2Client(config.google.clientId);
const generateToken = (user, rememberMe = false) => {
  const accessToken = jwt.sign(
    { id: user._id, email: user.email, type: "access" },
    config.jwt.secret,
    {
      expiresIn: config.jwt.expiresIn,
    },
  );
  const refreshToken = jwt.sign(
    { id: user._id, email: user.email, type: "refresh" },
    config.jwt.refreshSecret,
    {
      expiresIn: rememberMe
        ? config.jwt.rememberMeExpiry
        : config.jwt.refreshSecretExpiry,
    },
  );

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
  const payload = jwt.verify(refreshToken, config.jwt.refreshSecret);

  if (payload.type !== "refresh") {
    throw new UnauthorizedError("Invalid token type");
  }

  const user = await User.findById(payload.id)
    .select("-password")
    .populate("role", "name");

  if (!user) {
    throw new UnauthorizedError("User not found");
  }

  const tokens = generateToken(user);

  logger.info(`Token refreshed for user: ${user.email}`);

  return tokens;
};

const googleLogin = async (credential, role) => {
  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: config.google.clientId,
  });

  const payload = ticket.getPayload();

  const { sub: googleId, name, email, picture } = payload;

  if (!email) {
    throw new UnauthorizedError("Email is required for Google login");
  }

  let user = await User.findOne({ $or: [{ googleId }, { email }] });
  if (!user) {
     if (!role) {
    throw new UnauthorizedError("No account found. Please sign up first.");
  }
    const userRole = await Role.findOne({ name: role });
    const password = await bcrypt.hash(crypto.randomUUID(), 12);
    user = await User.create({
      name,
      email,
      password,
      googleId,
      profilePicture: picture,
      role: userRole._id,
    });

    logger.info(`Google User Created: ${email}`);
  } else if (!user.googleId) {
    user.googleId = googleId;
    user.profilePicture = picture;
    await user.save();
    logger.info(`Google User Logged In: ${email}`);
  } else {
    logger.info(`Google User Logged In: ${email}`);
  }

  const tokens = generateToken(user);

  const userWithRole = await User.findById(user._id)
    .populate("role", "name")
    .select("-password");
  return {
    userWithRole,
    tokens,
  };
};

const getUser = async (data) => {
  const currentUser = await User.findById(data._id)
    .select("-password")
    .populate("role", "name");
  return {
    user: currentUser,
  };
};
export { login, refreshAccessToken, googleLogin, getUser };
