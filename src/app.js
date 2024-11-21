const express = require("express");
const app = express();

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 기본 라우트
app.get("/", (req, res) => {
  res.send("안녕하세요! Express 서버에 오신 것을 환영합니다.");
});

module.exports = app;
