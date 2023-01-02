const pool = require("../mysql/pool");
var express = require("express");
var router = express.Router();

sql = {
  select: "select * from boarder",
  selectOne: "SELECT * FROM boarder where id=? ",
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

module.exports = router;
