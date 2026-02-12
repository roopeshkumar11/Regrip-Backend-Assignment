import rateLimit from "express-rate-limit";

// strict limiter for auth routes
const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5, // only 5 attempts
  message: {
    status: 429,
    message: "Too many OTP/login attempts. Try again after 10 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export default authLimiter;
