import logger from "../../../utils/logger.js";
import { sendSuccess } from "../../../utils/response.js";
import { getUser, login, refreshAccessToken } from "./auth.service.js";

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
        logger.info(`User Logout Successfully ${req.user.email}`)
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

const currentUser = async(req, res, next) => {
    try {
        const user = await getUser(req.user)
        return sendSuccess(res, user, 'Current user fetched successfully')
    } catch (error) {
        next(error)
    }
}
export { loginUser, logout, refreshToken, currentUser }