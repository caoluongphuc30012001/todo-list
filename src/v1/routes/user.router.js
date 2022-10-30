import { Router } from "express";
import userController from "../controllers/user.controller.js";
const router = Router();
router.post("/create-new-user", userController.createNewUser);
router.post("/forgot-password", userController.forgotPassword);

export default router;
