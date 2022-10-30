import express from "express";
import compression from "compression";
import responseTime from "response-time";
import "./v1/databases/init.mysql.js";
import route from "./v1/routes/index.router.js";
const app = express();
// require('./v1/databases/init.redis')

app.use(responseTime());
// compress responses
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//router
route(app);

// Error Handling Middleware called

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});

export default app;
