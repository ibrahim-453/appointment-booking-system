import { googleLogin, register } from "./userAuth.service.js";
import { sendCreated, sendSuccess } from "../../../utils/response.js";

const registerUser = async (req, res, next) => {
  try {
    const user = await register(req.body);

    return sendCreated(res, user, "User registered successfully");
  } catch (error) {
    next(error);
  }
};

const googleUser = async (req, res, next) => {
  try {
    const user = await googleLogin(req.body.credential);

    return sendSuccess(res, user, "User logged in successfully");
  } catch (error) {
    next(error);
  }
};
export { registerUser, googleUser };
