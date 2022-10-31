import { Router } from "express";
import jobController from "../controllers/job.controller.js";
import redisController from "../controllers/redis.controller.js";
const router = Router();

router.get("/", redisController.getListJob, jobController.getListJob);
router.post("/", jobController.addJob);
router.put("/", jobController.updateJob);
router.delete("/", jobController.removeJob);
export default router;
