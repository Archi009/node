const express = require("express");
const pool = require("../mysql/pool");
let router = express.Router();

const sql = {
  select: "select * from u_id",
  insert: "insert into u_id set ?",
  update: "update u_id set ? where id =?",
  delete: "delete from u_id where id =?",
};

//회원가입
router.post("/signup", (req, res) => {
  pool.query(sql.insert, req.body, function (err, result, fields) {
    console.log(result);
    if (err) {
      if (err.code == "ER_DUP_ENTRY") {
        //에러문에 결과값을 구분해서 보내준다
        res.json({ result: false, data: "아이디중복" });
        console.log(err);
      } else {
        res.json({ result: false, data: "기타에러" });
      }
    } else {
      res.json({ result: true, data: result }); //결과값을 에러와 구분해서 보낸다
    }
  });
});
// 로그인 프로세스
router.post("/login", function (req, res) {
  var username = req.body.id;
  var password = req.body.pw;
  console.log(username, password);
  if (username && password) {
    // id와 pw가 입력되었는지 확인

    pool.query(
      "SELECT * FROM u_id WHERE id = ? AND pw = ?",
      [username, password],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          // pool에서의 반환값이 있으면 로그인 성공
          req.session.is_logined = true; // 세션 정보 갱신
          req.session.nickname = username;
          req.session.save(function () {
            res.send(`<script type="text/javascript">alert("로그인 완료"); 
      document.location.href="/boarder.html";</script>`);
          });
        } else {
          res.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); 
              document.location.href="/login.html";</script>`);
        }
      }
    );
  } else {
    res.send(`<script type="text/javascript">alert("아이디와 비밀번호를 입력하세요!"); 
      document.location.href="/login.html";</script>`);
  }
});

//로그아웃
router.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    res.send(`<script type="text/javascript">alert("로그아웃 완료"); 
    document.location.href="/login.html";</script>`);
  });
});

//수정

//아이디 중복검사
router.get("/login/check", (req, res) => {
  pool.query("select id from u_id", function (err, result, fields) {
    if (err) {
      // console.log(err);
    }
    console.log(res);
    res.json(result);
  });
});
module.exports = router;
