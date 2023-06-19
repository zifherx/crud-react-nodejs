import express from "express";
import indexRoutes from "./routes/index.js";
import { variables } from "./config.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

// Settings
app.set("port", 3000 || variables.PORT);

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api", indexRoutes);

export default app;
