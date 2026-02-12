import express from "express";
import authMiddleware from "../middlware/authMiddleware.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const taskrouter = express.Router();

// all routes protected
taskrouter.post("/", authMiddleware, createTask);
taskrouter.get("/", authMiddleware, getTasks);
taskrouter.put("/:id", authMiddleware, updateTask);
taskrouter.delete("/:id", authMiddleware, deleteTask);

export default taskrouter;
