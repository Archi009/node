var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "dar la bienvenida", name: "BulletBoard" }); //랜더링
});

module.exports = router;
