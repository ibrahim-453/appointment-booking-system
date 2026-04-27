import express from 'express'
import validate from '../../../middlewares/validation.js'
import { registerSchema } from './userAuth.validation.js'
import { googleUser, registerUser } from './userAuth.controller.js'
import { authLimiter } from '../../../middlewares/rateLimiter.js'

const router = express.Router()

router.post(
    '/register',
    validate(registerSchema),
    registerUser
)
router.post(
    '/google',
    authLimiter,
    googleUser
)
export default router