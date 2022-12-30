const pool = require("../test/pool");
var express = require("express");
var router = express.Router();

sql = {
  select: "select * from board order by title",
  insert: "insert into board set ?",
  update: "update board set ? where no =?",
  delete: "delete from board where no =?",
};

//전체조회
router.get("/", (req, res) => {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//등록
router.post("/", (req, res) => {
  pool.query(sql.insert, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//수정
router.put("/:no", (req, res) => {
  let data = [req.body, req.params.no];
  pool.query(sql.update, data, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//삭제
router.delete("/:no", (req, res) => {
  const no = req.params.no;
  pool.query(sql.delete, no, function (err, results, fields) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(results);
    let resultData = {};
    if (results.affectedRows > 0) {
      resultData.result = true;
      resultData.data = req.body;
    } else {
      resultData.result = false;
    }
    res.send(resultData);
  });
});

module.exports = router;
