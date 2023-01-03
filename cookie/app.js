const http = require("http");
const cookie = require("cookie");

http
  .createServer((req, res) => {
    let cookies;
    if (req.headers.cookie) {
      cookies = cookie.parse(req.headers.cookie); //쿠키 조회
      console.log(cookies.gross_cookie);
    }
    console.log(cookies);

    res.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=strawberry",
        `gross_cookie=raseberry; Max-Age=${5 * 60}; HttpOnly; Path=/user`,
      ], //maxage 설정으로 시간 설정 만큼 지나고 삭제, Httponly는 javascript단에서 컨트롤 할 수 없게 만들 수 있는 상태 path/domain는 동일한 path 혹은 domain에서 같은 쿠키값을 조회 하기 위해서 사용
    }); //위와 같은 이름의 쿠키를 저장한다
    res.end("hello");
  })
  .listen(3000, () => {
    //method chain . sever.listen 과 같은 의미
    console.log("sever running http://localhost:3000");
  });
