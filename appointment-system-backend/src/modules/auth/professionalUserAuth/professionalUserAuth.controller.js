import { sendCreated } from "../../../utils/response.js";
import { completeProfile, registerProfessionalUser } from "./professionalUserAuth.service.js";

const register = async (req, res, next) => {
  try {
    const profUser = await registerProfessionalUser(req.body);

    return sendCreated(
      res,
      profUser,
      "Professional user registered successfully",
    );
  } catch (error) {
    next(error);
  }
};

const completeUserProfile = async (req, res, next) => {
  try {
    const profile = await completeProfile(req.user, req.body);

    return sendCreated(res, profile, "Profile completed successfully");
  } catch (error) {
    next(error);
  }
};

export { register, completeUserProfile };
