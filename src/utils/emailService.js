require("dotenv").config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

exports.sendEmail = (email, code) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "인증 코드",
    text: `인증 코드: ${code}`,
  };

  return transporter.sendMail(mailOptions);
};
