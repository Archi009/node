const http = require("http");
let infoArr = [];
infoArr["kim"] = { name: "김유신", hobby: "게임" };
infoArr["park"] = { name: "박지성", hobby: "축구" };
infoArr["leo"] = { name: "messi", hobby: "축구" };

const server = http.createServer((req, res) => {
  const myurl = new URL("http://127.0.0.1:3000" + req.url);
  console.log(myurl.pathname);
  console.log(myurl.searchParams);
  if (myurl.pathname == "/") {
    res.end("main");
  } else if (myurl.pathname == "/info") {
    // res.statusCode = 200;
    // res.setHeader("content-type", "text/html"); //mime types 타입을 다르게해서 읽히는 방법을 다르게 할 수 있다. 구글에 검색 해보자
    let userid = myurl.searchParams.get("userid");
    res.write(info(userid));
  } else if (myurl.pathname == "/boardReg") {
    res.write(boardReg());
    res.end();
  } else if (myurl.pathname == "/boardRegAction") {
    let title = myurl.searchParams.get("title");
    let content = myurl.searchParams.get("content");
    console.log(title);
    console.log(content);
    res.end("등록완료");
  } else if (myurl.pathname == "/userReg") {
    res.write(userReg());
    res.end();
  } else if (myurl.pathname == "/userRegAction") {
    let userId = myurl.searchParams.get("userid");
    let userName = myurl.searchParams.get("username");
    let userPw = myurl.searchParams.get("pw");
    let userHp = myurl.searchParams.get("hp");
    console.log(userId);
    console.log(userName);
    console.log(userPw);
    console.log(userHp);
    res.end("등록완료");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('server is running http"//127.0.0.3000');
});

function info(userid) {
  if (!userid || !infoArr[userid]) {
    //userid 가 없거나 infoArr배열에 userid값이 없다면,
    return "no user";
  }
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>info</title>
  </head>
  <body>
    <h3>my info</h3>
    <div>id: ${userid ? userid : ""}</div>
     <div>이름: infoArr${infoArr[userid].name}</div>
     <div>취미: infoArr${infoArr[userid].hobby}</div>
  </body>
  </html>`;
  return html;
}

function boardReg() {
  let boardReg = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>boardReg</title>
    </head>
    <body>
    <h3>왈왈</h3>
    <form action="/boardRegAction">
    <div>왈<input type="text" name="title" /></div>
    <div><textarea name="content" id="mo" cols="30" rows="10"></textarea></div>
    <div><button>등록</button></div>
    </form>
    </body>
    </html>`;
  return boardReg;
}
function userReg() {
  let userReg = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>
  </title>
</head>
<body>
  <form action="/userRegAction">
    <div><input type="text" name="userid" placeholder="아이디"/></div>
    <div><input type="text" name="username" placeholder="이름"/></div>
    <div><input type="text" name="pw" placeholder="비밀번호"/></div>
    <div><input type="text" name="hp" placeholder="휴대폰 번호"/></div>
    <div><button>등록</button></div>
  </form>
</body>
</html>`;
  return userReg;
}
