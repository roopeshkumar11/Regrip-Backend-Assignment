import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ActivityLog = sequelize.define("ActivityLog", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  action: {
    type: DataTypes.STRING, 
    // LOGIN_SUCCESS, LOGIN_FAIL, TASK_CREATED etc
  },

  details: {
    type: DataTypes.TEXT,
  },

  ipAddress: {
    type: DataTypes.STRING,
  },
});

User.hasMany(ActivityLog, { foreignKey: "userId" });
ActivityLog.belongsTo(User, { foreignKey: "userId" });

export default ActivityLog;