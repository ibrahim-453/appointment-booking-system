import express from "express";
import regularUserRoutes from "../modules/auth/regularUserAuth/userAuth.routes.js";
import professionalUserRoutes from "../modules/auth/professionalUserAuth/professionalUserAuth.routes.js";
import authRoutes from "../modules/auth/sharedAuth/auth.routes.js";
const router = express.Router();
const API_PREFIX = "/api/v1";

router.use(`${API_PREFIX}/auth/regular-user`, regularUserRoutes);
router.use(`${API_PREFIX}/auth/professional-user`, professionalUserRoutes);
router.use(`${API_PREFIX}/auth`, authRoutes);

export default router;
