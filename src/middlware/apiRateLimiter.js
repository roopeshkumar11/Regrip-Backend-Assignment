import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // 60 requests per minute
  message: {
    status: 429,
    message: "Too many requests. Please slow down.",
  },
});

export default apiLimiter;
