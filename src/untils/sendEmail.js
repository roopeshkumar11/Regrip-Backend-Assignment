import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, otp) => {
  const message = `
Hello,

Your One-Time Password (OTP) for login is: ${otp}

This OTP is valid for 10 minutes. Please do not share it with anyone.

If you did not request this, please ignore this email.

Best regards,
Your Task Management App Team
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: message,
  });
};

export default sendEmail;
