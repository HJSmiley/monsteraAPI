const { sendEmail } = require("../utils/emailService");

const APPROVED_EMAILS = ["pepsikang98@gmail.com"];
const verificationCodes = {};

exports.sendVerificationCode = (req, res) => {
  const { email } = req.body;

  if (!APPROVED_EMAILS.includes(email)) {
    return res.status(400).json({ message: "승인되지 않은 이메일입니다." });
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();
  verificationCodes[email] = code;

  sendEmail(email, code)
    .then(() => res.json({ message: "인증 코드가 전송되었습니다." }))
    .catch((err) =>
      res.status(500).json({ message: "이메일 전송 실패", error: err.message })
    );
};

exports.verifyCode = (req, res) => {
  const { email, code } = req.body;

  if (verificationCodes[email] === code) {
    delete verificationCodes[email];
    return res.json({ message: "인증 성공" });
  }

  res.status(400).json({ message: "잘못된 인증 코드입니다." });
};
