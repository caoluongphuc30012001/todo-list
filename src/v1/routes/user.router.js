import { Router } from "express";
import userController from "../controllers/user.controller.js";
const router = Router();

/**
 *  @swagger
 *  /user/create-new-user:
 *    post:
 *      summary: Tạo người dùng mới
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                FullName:
 *                  type: string
 *                UserName:
 *                  type: string
 *                Password:
 *                  type: string
 *                Email:
 *                  type: string
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

router.post("/create-new-user", userController.createNewUser);

/**
 *  @swagger
 *  /user/forgot-password:
 *    post:
 *      summary: Quên mật khẩu
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                Email:
 *                  type: string
 *                UserName:
 *                  type: string
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

router.post("/forgot-password", userController.forgotPassword);

export default router;
