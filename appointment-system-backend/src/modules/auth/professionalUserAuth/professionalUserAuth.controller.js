import { sendCreated } from "../../../utils/response.js";
import { registerProfessionalUser } from "./professionalUserAuth.service.js";

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

export { register };
