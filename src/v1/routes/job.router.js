import { Router } from "express";
import jobController from "../controllers/job.controller.js";
import redisController from "../controllers/redis.controller.js";
const router = Router();

/**
 *  @swagger
 *  /job:
 *    get:
 *      summary: Lấy toàn bộ công việc hiện tại của một user
 *      tags: [Jobs]
 *      parameters:
 *        - in: query
 *          name: uid
 *          schema:
 *            type: string
 *          description: id của người dùng
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/GetJobResponse'
 */

router.get("/", redisController.getListJob, jobController.getListJob);

/**
 *  @swagger
 *  /job:
 *    post:
 *      summary: Thêm một công việc mới cho user
 *      tags: [Jobs]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                uid:
 *                  type: string
 *                  description: Id người dùng
 *                JobName:
 *                  type: string
 *                JobDescription:
 *                  type: string
 *                StartDay:
 *                  type: string
 *                  description: Format (UTC)
 *                EndDay:
 *                  type: string
 *                  description: Format (UTC)
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                properties:
 *                  result:
 *                    type: string
 *                    description: Thông tin back end trả về
 *
 */

router.post("/", jobController.addJob);

/**
 *  @swagger
 *  /job:
 *    put:
 *      summary: Chỉnh sửa một công việc
 *      tags: [Jobs]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                id:
 *                  type: number
 *                  description: Id công việc cần chỉnh sửa
 *                uid:
 *                  type: number
 *                  description: Id người dùng
 *                JobName:
 *                  type: string
 *                JobDescription:
 *                  type: string
 *                JobStatus:
 *                  type: string
 *                StartDay:
 *                  type: string
 *                  description: Format (UTC)
 *                EndDay:
 *                  type: string
 *                  description: Format (UTC)
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                properties:
 *                  result:
 *                    type: string
 *                    description: Thông tin back end trả về
 *
 */

router.put("/", jobController.updateJob);

/**
 *  @swagger
 *  /job:
 *    delete:
 *      summary: Xóa một công việc
 *      tags: [Jobs]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                id:
 *                  type: number
 *                  description: Id công việc cần chỉnh sửa
 *                uid:
 *                  type: number
 *                  description: Id người dùng
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                properties:
 *                  result:
 *                    type: string
 *                    description: Thông tin back end trả về
 *
 */

router.delete("/", jobController.removeJob);
export default router;
