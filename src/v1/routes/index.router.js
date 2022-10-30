import userRouter from "./user.router.js";
import jobRouter from "./job.router.js";
export default function route(app) {
    app.use("/v1/api/user", userRouter);
    app.use("/v1/api/job", jobRouter);
}
