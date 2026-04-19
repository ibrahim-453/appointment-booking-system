import express from "express";
import validate from "../../../middlewares/validation.js";
import { authLimiter } from "../../../middlewares/rateLimiter.js";
import { authenticateLocal } from "../../../middlewares/auth.js";
import { loginSchema } from "./auth.validation.js";
import { loginUser } from "./auth.controller.js";

const router = express.Router();

router.post(
    '/login',
    authLimiter,
    validate(loginSchema),
    authenticateLocal,
    loginUser
)

export default router;