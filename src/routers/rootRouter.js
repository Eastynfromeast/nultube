import express from "express";
import { home } from "../controllers/videoController.js";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
