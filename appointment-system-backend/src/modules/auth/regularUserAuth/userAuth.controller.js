import { register } from "./userAuth.service.js";
import { sendCreated } from "../../../utils/response.js";

const registerUser = async (req, res, next) => {
  try {
    const user = await register(req.body);

    return sendCreated(res, user, "User registered successfully");
  } catch (error) {
    next(error);
  }
};

export { registerUser };
