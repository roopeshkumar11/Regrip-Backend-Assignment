import express from "express";
import authrouter from "./routes/authRoutes.js";
import taskrouter from "./routes/taskRoutes.js";
import apiLimiter from "./middlware/apiRateLimiter.js";
import dotenv from "dotenv"
const app=express();

dotenv.config()
app.use(express.json());
app.use("/api", apiLimiter);
app.use("/api/auth", authrouter);
app.use("/api/tasks",taskrouter);


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome! API is live and running 🚀"
    });
});


export default app;


