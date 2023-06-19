import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import taskRoutes from "./tasks.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("API CRUD REACT NODEJS");
});

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/tasks", taskRoutes);

export default router;
