import express from 'express'
import validate from '../../../middlewares/validation.js'
import { registerSchema } from './userAuth.validation.js'
import { registerUser } from './userAuth.controller.js'

const router = express.Router()

router.post(
    '/register',
    validate(registerSchema),
    registerUser
)

export default router