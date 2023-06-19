import Router from "express";
import userController from "../controllers/user.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/", [authRequired], userController.getAll);

export default router;
