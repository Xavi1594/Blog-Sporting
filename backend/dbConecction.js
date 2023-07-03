const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    throw err;
  }
  console.log("Conexión establecida con la base de datos");
  connection.release();
});

module.exports = db;
