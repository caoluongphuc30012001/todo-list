import express from "express";
import compression from "compression";
import responseTime from "response-time";
import "./v1/databases/init.mysql.js";
import route from "./v1/routes/index.router.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import cors from "cors";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library Api for todolist backend",
            version: "1.0.0",
            description:
                "This is list of API of Todolist Back end. Which use nodejs, redis, jwt, mysql",
            termsOfService: "http://swagger.io/terms/",
            contact: {
                email: "phuccao.30012001@gmail.com",
            },
        },
        servers: [{ url: "https://rocky-spire-87362.herokuapp.com/v1/api" }],
    },
    apis: ["src/v1/swagger/*.js", "src/v1/routes/*.js"],
};

const specs = swaggerJsdoc(options);

const app = express();

app.use(
    cors({
        origin: "*",
        method: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

app.use("/v1/api/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

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
