import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "../models/User.models.js";

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending",
  },
});

User.hasMany(Task, { foreignKey: "user_id" });
Task.belongsTo(User, { foreignKey: "user_id" });

export default Task;
