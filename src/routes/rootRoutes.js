import express from "express";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import imgRoutes from "./imgRoutes.js";
import commentRoutes from "./commentRoutes.js";


const rootRoutes = express.Router();
rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/user", userRoutes);
rootRoutes.use("/img", imgRoutes);
rootRoutes.use("/comment",commentRoutes);

export default rootRoutes;