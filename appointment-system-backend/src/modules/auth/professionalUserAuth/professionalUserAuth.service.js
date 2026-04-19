import { ConflictError } from "../../../utils/errors.js";
import logger from "../../../utils/logger.js";
import Role from "../../../database/models/role.model.js";
import User from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";

const registerProfessionalUser = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (user) {
    throw new ConflictError("Email already exists");
  }

  const password = await bcrypt.hash(data.password, 12);
  const role = await Role.findOne({ name: "professional" });

  const profUser = await User.create({
    name: data.name,
    email: data.email,
    password,
    businessName: data.businessName,
    serviceCategory: data.serviceCategory,
    experience: data.experience,
    role: role._id,
    phone: data.phone,
  });

  logger.info(`Professional user registered with email: ${profUser.email}`);

  return profUser;
};

export { registerProfessionalUser };
