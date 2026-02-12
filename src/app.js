import express from "express";
import authrouter from "./routes/authRoutes.js";
import taskrouter from "./routes/taskRoutes.js";
import apiLimiter from "./middlware/apiRateLimiter.js";
import cors from "cors";
import dotenv from "dotenv"
const app=express();

dotenv.config()
app.use(cors())
app.use(express.json());
app.use("/api", apiLimiter);
app.use("/api/auth", authrouter);
app.use("/api/tasks",taskrouter);


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome! Task Management API is live and running successfully.",
    suggestion: "Use /api/auth for authentication and /api/tasks to manage tasks.",
    documentation: "Check Postman docs for full API usage."
  });
});



export default app;


