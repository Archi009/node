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

router.get("/", (req, res) => {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  pool.query(sql.selectOne, id, function (err, result, fields) {
    if (err) {
      console.log(err);
    }
    res.json(result[0]);
  });
});
module.exports = router;
