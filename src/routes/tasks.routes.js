import Router from "express";
import taskController from "../controllers/tasks.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/", [authRequired], taskController.getAll);
router.get("/:itemId", [authRequired], taskController.getOneById);
router.post("/", [authRequired], taskController.createOne);
router.put("/:itemId", [authRequired], taskController.updateOneById);
router.delete("/:itemId", [authRequired], taskController.deleteOneById);

export default router;
