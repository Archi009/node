const pool = require("../mysql/pool");
var express = require("express");
var router = express.Router();

const sql = {
  select: "select * from boarder",
  selectOne: "SELECT * FROM boarder where no=? ",
  insert: "insert into boarder set ?",
  update: "update boarder set ? where no =?",
  delete: "delete from boarder where no =?",
};
//조회
router.get("/", (req, res) => {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
//상세페이지,단건조회
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const tip = req.session.nickname;
  pool.query(sql.selectOne, id, function (err, result, fields) {
    if (err) {
      console.log(err);
    }
    result[0].tip = tip;
    console.log(result[0].tip);
    res.json(result[0]);

    // console.log(res);
  });
});
//작성
router.post("/", (req, res) => {
  req.body.userid = req.session.nickname;
  console.log(req.body);
  pool.query(sql.insert, req.body, function (err, result, fields) {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.json(result);
  });
});
//수정
router.put("/:no", (req, res) => {
  let data = [req.body, req.params.no];
  pool.query(sql.update, data, function (err, result, fields) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(result);
    let resultData = {};
    if (result.changedRows > 0) {
      resultData.result = true;
      resultData.data = req.body;
    } else {
      resultData.result = false;
    }
    res.send(resultData);
  });
});

//삭제
router.delete("/:no", (req, res) => {
  let data = req.params.no;
  console.log(data);
  pool.query(sql.delete, data, function (err, result, fields) {
    if (err) {
      console.log(err);
    }

    res.statusCode = 200;
    res.end();
  });
});

module.exports = router;
