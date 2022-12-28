const http = require("http"); //http.js(모듈) 안에 http객체를 가르킨다 means 참조 변수
const fs = require("fs");
//서버 선언(클라이언트 요청시 호출(처리)도리 핸들러)

const server = http.createServer((req, res) => {
  const myUrl = new URL("http://localhost:3000" + req.url); //주소랑 url의 프로토콜까지 있어야 완전한 url이 만들어 진다
  console.log("pathname:", myUrl.pathname);
  console.log("searchparam", myUrl.searchParams); //이런 대부분의 처리를 express가 대부분 처리해준다
  if (myUrl.pathname.startsWith("/page")) {
    const pagename = "./template" + myUrl.pathname.substring(5) + ".html";
    fs.readFile(pagename, "utf8", (err, data) => {
      res.end(data);
    }); //callback 함수의 첫번째 매개변수는 에러값, 두번째 매개변수는 데이터값
  } else {
    res.end("no path");
  }
});
server.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
