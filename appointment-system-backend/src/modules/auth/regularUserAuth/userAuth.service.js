import Role from "../../../database/models/role.model.js";
import User from "../../../database/models/user.model.js";
import { ConflictError } from "../../../utils/errors.js";
import bcrypt from "bcrypt";
import logger from "../../../utils/logger.js";

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

export { register };
