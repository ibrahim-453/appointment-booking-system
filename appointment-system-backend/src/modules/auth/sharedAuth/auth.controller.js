import { sendSuccess } from "../../../utils/response.js";
import { login, refreshAccessToken } from "./auth.service.js";

const loginUser = async (req, res, next) => {
    try {
        const { rememberMe = false } = req.body
        const user = await login(req.user, rememberMe)

        return sendSuccess(res, user, 'User logged in successfully')
    } catch (error) {
        next(error)
    }
}

const logout = async (req, res, next) => {
    try {
        return sendSuccess(res, null, 'User logged out successfully')
    } catch (error) {
        next(error)
    }
}
const refreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        const user = await refreshAccessToken(refreshToken)

        return sendSuccess(res, user, 'User logged in successfully')
    } catch (error) {
        next(error)
    }
}

export { loginUser, logout, refreshToken }