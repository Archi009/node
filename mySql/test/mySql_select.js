/*select.js */

const mysql = require("mysql");

//mysql 접속정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};

let connection = mysql.createConnection(conn); //DB커넥션 생성
connection.connect(); //DB접속

sql = "SELECT * FROM customers";
connection.query(sql, function (err, results, fields) {
  console.log(results);
});

connection.end(); //DB접속 종료
