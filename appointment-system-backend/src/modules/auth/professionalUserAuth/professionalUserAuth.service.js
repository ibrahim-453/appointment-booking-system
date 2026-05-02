import { ConflictError } from "../../../utils/errors.js";
import logger from "../../../utils/logger.js";
import Role from "../../../database/models/role.model.js";
import User from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import Category from "../../../database/models/category.model.js";
import ProfessionalProfile from "../../../database/models/professionalProfile.model.js";

const registerProfessionalUser = async (data) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new ConflictError("Email already exists");
  }

  const password = await bcrypt.hash(data.password, 12);

  const role = await Role.findOne({ name: "professional" });
  if (!role) {
    throw new ConflictError("Role not found");
  }

  // use slug ideally
  const category = await Category.findOne({ slug: data.category });
  if (!category) {
    throw new ConflictError("Category does not exist");
  }

  const profUser = await User.create({
    name: data.name,
    email: data.email,
    password,
    role: role._id,
    phone: data.phone,
  });

  const userDetail = await ProfessionalProfile.create({
    user: profUser._id,
    businessName: data.businessName,
    category: category._id,
    experience: data.experience,
  });

  logger.info(`Professional user registered with email: ${profUser.email}`);

  return {
    profUser,
    detail: userDetail
  };
};

const completeProfile = async (user, data) => {
  const profUser = await User.findById(user._id).populate("role", "name");

  if (!profUser) {
    throw new ConflictError("User not found");
  }

  let categoryId;

  if (data.category) {
    const category = await Category.findOne({ slug: data.category });
    if (!category) {
      throw new ConflictError("Invalid category");
    }
    categoryId = category._id;
  }

  const updatedProfile = await ProfessionalProfile.findOneAndUpdate(
    { user: profUser._id },
    {
      ...(data.businessName && { businessName: data.businessName }),
      ...(categoryId !== undefined && { category: categoryId }),
      ...(data.experience && { experience: data.experience }),
      ...(data.about && { about: data.about }),
      ...(data.availability && { availability: data.availability }),
      ...(data.location && { location: data.location }),
      ...(data.fee !== undefined && { fee: data.fee }),
      ...(data.headline && { headline: data.headline }),
      ...(data.currency && { currency: data.currency }),
      isCompleted: true
    },
    { new: true }
  );

  return {
    user: profUser,
    profile: updatedProfile
  };
};

export { registerProfessionalUser, completeProfile };
