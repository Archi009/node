const pool = require("../test/pool");
var express = require("express");
// const { prependListener } = require("../app");
var router = express.Router();

sql = {
  select: "select * from books order by title",
  selectOne: "select * from books where no =?",
  insert: "insert into books set ?",
  update: "update books set ? where no =?",
  delete: "delete from books where no =?",
};

//전체 조회
router.get("/", (req, res) => {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//단건 조회
router.get("/:no", (req, res) => {
  const no = req.params.no;
  console.log(no);
  pool.query(sql.selectOne, no, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results[0]);
  });
});

//등록
router.post("/", (req, res) => {
  pool.query(sql.insert, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
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
    console.log(results);
    res.json(results);
  });
});

//삭제
router.delete("/:no", (req, res) => {
  const no = req.params.no;
  pool.query(sql.delete, no, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
    res.end();
  });
});

module.exports = router;
