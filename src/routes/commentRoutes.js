import express from "express";
import { createComment, getComment } from "../controllers/commenController.js";

const commentRoutes = express.Router();
commentRoutes.get("/get-comment/:img_id", getComment)
commentRoutes.post("/create-comment", createComment)

export default commentRoutes;