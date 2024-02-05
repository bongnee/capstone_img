import express from "express";
import { getImgCreatedByUserId, getSavedImgdByUserId, getUser } from "../controllers/userController.js";
import { verifyToken } from "../config/jwt.js";



const userRoutes = express.Router();
userRoutes.get("/get-user", getUser);
userRoutes.get("/get-saved-img-by-userid/:id",getSavedImgdByUserId);
userRoutes.get("/get-img-created-by-userid/:id",verifyToken, getImgCreatedByUserId);

export default  userRoutes;