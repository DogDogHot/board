const mysql = require("mysql2");

let pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: "3306",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10, //연결갯수 제한 (기본 10)
});

pool = pool.promise();
module.exports = pool;
