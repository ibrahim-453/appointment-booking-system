import { sendSuccess } from "../../../utils/response.js";
import { login } from "./auth.service.js";

const loginUser = async (req, res, next) => {
    try {
        const { rememberMe = false } = req.body
        const user = await login(req.user, rememberMe)

        return sendSuccess(res, user, 'User logged in successfully')
    } catch (error) {
        next(error)
    }
}

export { loginUser }