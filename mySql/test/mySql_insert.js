/*insert*/
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

let sql = "insert into customers set ?";
let data = {
  name: "최기자",
  email: "choi@gmail.com",
  phone: "010-222",
  address: "",
};

connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); //DB접속 종료
