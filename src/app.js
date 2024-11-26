const express = require("express");
const cors = require("cors");
const app = express();

// CORS 설정
// app.use(
//   cors({
//     origin: "https://monsteratech.com",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
//   })
// );

// (개발 환경에서만) CORS 설정
app.use(cors("*"));

// 그 외 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 기본 라우트
app.get("/", (req, res) => {
  res.json({
    message: "안녕하세요! Express 서버에 오신 것을 환영합니다.",
    status: "success",
  });
});

module.exports = app;
