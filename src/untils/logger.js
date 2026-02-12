import ActivityLog from "../models/ActivityLog.models.js";

const logActivity = async ({
  userId = null,
  action,
  details = "",
  ip = "",
}) => {
  try {
    await ActivityLog.create({
      userId,
      action,
      details,
      ipAddress: ip,
    });
  } catch (err) {
    console.log("Log error:", err.message);
  }
};

export default logActivity;
