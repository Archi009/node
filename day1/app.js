const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");

// });

const server = http.createServer((req, res) => {
  //서버에서도 html의 문서를 랜더링 할 수 있다는 예시 BUT 일일히 지정해주고 써주는건 힘들기 때문에 epress의 view 기능을 사용한다
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); //보내주는 txt의 타입을 html으로 설정
  res.write("<html>");
  res.write("<body><table border='1'>");
  for (let i = 0; i < 10; i++) {
    res.write("<tr><td>" + i + "</tr></td>");
  }
  res.end("</table></body></html>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
