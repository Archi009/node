const mysql = require("mysql");

//mysql 접속정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
  connectionLimit: 10,
};

let pool = mysql.createPool(conn); //DB커넥션 생성

function query(sql, data = null) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, data, results, fields) => {
      resolve(results);
    });
  });
}

module.exports = { pool, query };
