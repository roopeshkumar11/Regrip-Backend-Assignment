import express from "express";
import authrouter from "./routes/authRoutes.js";
import taskrouter from "./routes/taskRoutes.js";
import apiLimiter from "./middlware/apiRateLimiter.js";

const app=express();


app.use(express.json());
app.use("/api", apiLimiter);
app.use("/api/auth", authrouter);
app.use("/api/tasks",taskrouter);



export default app;


