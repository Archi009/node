const http = require("http"); //http.js(모듈) 안에 http객체를 가르킨다 means 참조 변수
//서버 선언(클라이언트 요청시 호출(처리)도리 핸들러)
const server = http.createServer((req, res) => {
  const myUrl = new URL("http://localhost:3000" + req.url); //주소랑 url의 프로토콜까지 있어야 완전한 url이 만들어 진다
  console.log("pathname:", myUrl.pathname);
  console.log("searchparam", myUrl.searchParams);
  res.end("hello");
});
server.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
