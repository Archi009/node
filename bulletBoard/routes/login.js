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
router.post("/"),
  (req, res) => {
    pool.query(sql.insert, req.body, function (err, result, fields) {
      if (err) {
        console.log(err);
      }
      res.json(result);
    });
  };
//로그인

//수정

module.exports = router;
