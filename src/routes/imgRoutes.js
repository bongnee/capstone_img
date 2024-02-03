import express from "express";
import { deleteImgById } from "../controllers/imgController.js";
import { verifyToken } from "../config/jwt.js";


const imgRoutes = express.Router();
imgRoutes.delete("/delete-img-by-id/:id",verifyToken, deleteImgById);


export default imgRoutes;