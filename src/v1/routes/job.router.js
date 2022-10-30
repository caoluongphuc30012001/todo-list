import { Router } from "express";
import jobController from "../controllers/job.controller.js";
const router = Router();
router.get("/", jobController.getListJob);
router.post("/", jobController.addJob);
router.put("/", jobController.updateJob);
router.delete("/", jobController.removeJob);
export default router;
