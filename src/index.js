const app = require("./app");
const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
