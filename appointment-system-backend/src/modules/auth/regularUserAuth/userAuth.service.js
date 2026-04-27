import Role from "../../../database/models/role.model.js";
import User from "../../../database/models/user.model.js";
import { ConflictError } from "../../../utils/errors.js";
import bcrypt from "bcrypt";
import logger from "../../../utils/logger.js";
import { UnauthorizedError } from "../../../utils/errors.js";
import { OAuth2Client } from "google-auth-library";
import { config } from "../../../config/index.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const client = new OAuth2Client(config.google.clientId);

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

const googleLogin = async (credential) => {
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
    const defaultRole = await Role.findOne({ name: "user" });
    const password = await bcrypt.hash(crypto.randomUUID(), 12);
    user = await User.create({
      name,
      email,
      password,
      googleId,
      profilePicture: picture,
      role: defaultRole._id,
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

export { register, googleLogin };
