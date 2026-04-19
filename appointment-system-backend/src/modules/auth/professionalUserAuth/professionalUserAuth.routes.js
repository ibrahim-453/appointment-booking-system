import express from "express";
import validate from "../../../middlewares/validation.js";
import { registerProfessionalSchema } from "./professionalUserAuth.validation.js";
import { register } from "./professionalUserAuth.controller.js";

const router = express.Router();

router.post(
  "/register",
  validate(registerProfessionalSchema),

  register,
);

export default router;
