import express from 'express'
import validate from '../../../middlewares/validation.js'
import { loginSchema, registerSchema } from './userAuth.validation.js'
import { loginUser, registerUser } from './userAuth.controller.js'
import { authLimiter } from '../../../middlewares/rateLimiter.js'
import { authenticateLocal } from '../../../middlewares/auth.js'


const router = express.Router()

router.post(
    '/register',
    validate(registerSchema),
    registerUser
)

router.post(
    '/login',
    authLimiter,
    validate(loginSchema),
    authenticateLocal,
    loginUser
)

export default router