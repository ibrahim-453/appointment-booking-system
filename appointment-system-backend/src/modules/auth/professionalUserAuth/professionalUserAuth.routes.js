import express from "express";
import validate from "../../../middlewares/validation.js";
import { completeProfileSchema, registerProfessionalSchema } from "./professionalUserAuth.validation.js";
import { completeUserProfile, register } from "./professionalUserAuth.controller.js";
import { authenticate } from "../../../middlewares/auth.js";
const router = express.Router();

router.post(
  "/register",
  validate(registerProfessionalSchema),

  register,
);

router.post(
  '/complete-profile',
  validate(completeProfileSchema),
  authenticate,
  completeUserProfile
)

export default router;
