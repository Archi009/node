const express = require("express");
const cookieParser = require("cookie-parser");
const app = express(); //서버를 구성 express가 대신 다 해줌

app.use(cookieParser());
app.get("/", (req, res) => {
  //쿠키
  console.log("Cookies:", req.cookies.test);
  res.cookie("test", "test");
  res.send("express");
});

app.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
