import Task from "../models/Task.models.js";


// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      userId: req.user.id, // important
    });

    res.status(201).json({
      message: "Task created",
      task,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// GET ALL TASKS (only user tasks)
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// UPDATE TASK (ownership check)
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id, userId: req.user.id }, // 🔥 ownership check
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    const { title, description, status } = req.body;

    await task.update({ title, description, status });

    res.json({
      message: "Task updated",
      task,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// DELETE TASK (ownership check)
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id, userId: req.user.id }, // 🔥 ownership check
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found or unauthorized" });
    }

    await task.destroy();

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
