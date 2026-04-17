import { login, register } from "./userAuth.service.js"
import { sendCreated, sendSuccess } from "../../../utils/response.js"
const registerUser = async (req, res, next) => {
    try {
        const user = await register(req.body)

       return sendCreated(res, user, 'User registered successfully')
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { rememberMe = false } = req.body
        const user = await login(req.user, rememberMe)

        return sendSuccess(res, user, 'User logged in successfully')
    } catch (error) {
        next(error)
    }
}

export { 
    registerUser,
    loginUser
}