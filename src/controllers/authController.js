import User from "../models/User.models.js";
import generateOTP from "../untils/generateOTP.js";
import sendEmail from "../untils/sendEmail.js";
import generateToken from "../untils/jwt.js";

// SEND OTP
export const sendOTP = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    let user = await User.findOne({ where: { email } });

    if (!user) {
      user = await User.create({ email, name });
    }

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 min

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // send email
    await sendEmail(email, "Your OTP", `Your OTP is ${otp}`);

    // ⭐ activity log
    await logActivity({
      userId: user.id,
      action: "OTP_SENT",
      details: `OTP sent to ${email}`,
      ip: req.ip,
    });

    res.json({ message: "OTP sent successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ================= VERIFY OTP =================
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      await logActivity({
        action: "LOGIN_FAIL",
        details: `User not found: ${email}`,
        ip: req.ip,
      });

      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      await logActivity({
        userId: user.id,
        action: "LOGIN_FAIL",
        details: `Invalid OTP for ${email}`,
        ip: req.ip,
      });

      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (new Date() > user.otpExpiry) {
      await logActivity({
        userId: user.id,
        action: "LOGIN_FAIL",
        details: `OTP expired for ${email}`,
        ip: req.ip,
      });

      return res.status(400).json({ message: "OTP expired" });
    }

    // success login
    user.isVerified = true;
    user.otp = null;
    await user.save();

    const token = generateToken(user);

    // ⭐ success log
    await logActivity({
      userId: user.id,
      action: "LOGIN_SUCCESS",
      details: `User logged in: ${email}`,
      ip: req.ip,
    });

    res.json({
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};