/*update */
const mysql = require("mysql");

//mysql
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};

let connection = mysql.createConnection(conn); //DB커넥션 생성
connection.connect(); //DB접속

let sql = "update customers set ? where id=?";
let data = [{ email: "park@gamil.com", name: "park" }, 8];
connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); //DB접속 종료
