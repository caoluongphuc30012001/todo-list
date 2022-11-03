import userRouter from "./user.router.js";
import jobRouter from "./job.router.js";
import { authorization } from "../middlewares/authorization.middleware.js";
export default function route(app) {
    app.use("/v1/api/user", userRouter);
    app.use("/v1/api/job", authorization, jobRouter);
}
