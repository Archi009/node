const express = require("express");
const pool = require("../mysql/pool");
let router = express.Router();

router.get("/", (req, res) => {
  const sql = "select * from customers";
  pool.query(sql, (err, result, fields) => {
    //ejs 템플릿 페이지       //데이터
    res.render("customers", { list: result });
  });
});
module.exports = router;
