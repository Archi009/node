const pool = require("../test/pool");
var express = require("express");
var router = express.Router();

//전체 조회
router.get("/", (req, res) => {
  sql = "SELECT * FROM customers";

  pool.query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
    res.json(results);
  });
});

//등록
router.post("/", (req, res) => {
  let sql = "insert into customers set ?";

  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
    res.json(results);
  });
});

//단건조회
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  sql = "SELECT * FROM customers where id=? ";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }

    res.json(results[0]);
  });
});

//수정
router.put("/:id", (req, res) => {
  let sql = "update customers set ? where id=?";
  let data = [req.body, req.params.id];
  pool.query(sql, data, function (err, results, fields) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(results);
    let resultData = {};
    if (results.changedRows > 0) {
      resultData.result = true;
      resultData.data = req.body;
    } else {
      resultData.result = false;
    }
    res.send(resultData);
  });
});

//삭제
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  let sql = "delete from customers where id=?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
    res.statusCode = 200;
    res.end();
  });
});

module.exports = router;
