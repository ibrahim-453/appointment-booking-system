import express from "express";
import validate from "../../../middlewares/validation.js";
import { authLimiter } from "../../../middlewares/rateLimiter.js";
import { authenticate, authenticateLocal } from "../../../middlewares/auth.js";
import { loginSchema, refreshTokenSchema } from "./auth.validation.js";
import { currentUser, loginUser, logout, refreshToken } from "./auth.controller.js";

const router = express.Router();

router.post(
    '/login',
    authLimiter,
    validate(loginSchema),
    authenticateLocal,
    loginUser
)

router.post(
    '/logout',
    authenticate,
    logout
)

router.post(
    '/refresh-token',
    validate(refreshTokenSchema),
    refreshToken 
)

router.get(
    '/me',
    authenticate,
    currentUser
)
export default router;