import express from "express";
import { deleteImgById, getImg, getImgDetail, getSavedImaged } from "../controllers/imgController.js";
import { verifyToken } from "../config/jwt.js";


const imgRoutes = express.Router();
imgRoutes.delete("/delete-img-by-id/:id",verifyToken, deleteImgById);
imgRoutes.get("/get-img",verifyToken, getImg);
imgRoutes.get("/get-img-detail/:id",verifyToken, getImgDetail );
imgRoutes.get("/get-saved-img/:id", getSavedImaged)


export default imgRoutes;