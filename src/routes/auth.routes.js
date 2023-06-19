import Router from "express";
import authController from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/login", validateSchema(loginSchema), authController.login);
router.post("/register", validateSchema(registerSchema), authController.register);
router.post("/logout", authController.logout);

export default router;
