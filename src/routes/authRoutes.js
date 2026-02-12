import express from "express";
import { sendOTP, verifyOTP } from "../controllers/authController.js";
import authLimiter from "../middlware/authRateLimiter.js";
const authrouter = express.Router();

authrouter.post("/send-otp",authLimiter, sendOTP);
authrouter.post("/verify-otp", authLimiter,verifyOTP);

export default authrouter;
