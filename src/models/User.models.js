import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";



const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },

  otp: {
    type: DataTypes.STRING,
  },

  otpExpiry: {
    type: DataTypes.DATE,
  },

  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;

