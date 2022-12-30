/*delete */
const mysql = require("mysql");

//mysql
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};

let connection = mysql.createConnection(conn); //DB커넥션 생성(연결 준비)
connection.connect(); //DB접속

let sql = "delete from customers where id=?";
let data = 8;
//               1쿼리를 보낸다               result받아온 값(json값으로 받아온다)
connection.query(sql, data, function (err, results, fields) {
  if (err) {
    //받아온 값으로 함수를 실행한다(callback 함수)
    console.log(err);
  }
  console.log(results);
});

connection.end(); //DB접속 종료
