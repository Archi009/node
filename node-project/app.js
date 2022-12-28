//책에 따라 코딩을 하면 requier 을 사용해서 하는데, 이는 ES(이크마 스크립트) 표준이 아니다. 그래서 import형식으로 바꿔줬다.
//but requier 가 좀 더 편하다
import express from "express";
import boardRouter from "./routers/board.js";
import customerRouter from "./routers/customer.js";
const app = express(); // 앞전의 http.creatServer()와 같은 기능
const port = 3000; //서버 포트 번호

app.get("/login", function (req, res) {
  console.log(req.query.email);
  res.send("로그인 완료");
});

app.use(express.json());
app.use(express.static("public")); //가상경로를 지정해서 다른 경로들과 차별화 시켜 구분한다.
app.use("/board", boardRouter);
app.use("/customer", customerRouter);
app.use(function (err, req, res, next) {
  res.states(500).json({ statusCode: res.statusCode, msg: err.message });
});

app.get(
  "/example",
  (req, res, next) => {
    throw new Error("에러발생");
    console.log("첫번째 콜백");
    next();
  },
  (req, res) => {
    res.send("두번째 콜백");
  }
);

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get("/customer", (req, res) => {
  res.send("get customer");
});
app.post("/customer", (req, res) => {
  res.send("post");
});

app.get("/ab?cd", (req, res) => {
  res.send("정규표현식");
}); //abcd에서 b가 있거나 없거나

// app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
