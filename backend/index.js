const port = process.env.PORT || 3000;
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
require("dotenv").config();

const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true,
  };
  app.use(cors(corsOptions));
  
  
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  
  
  
  db.connect((err) => {
    if (err) throw err;
    console.log("Conexión establecida con la base de datos");
  });
  app.use(express.static("public"));
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(
    session({
      secret: process.env.JWT_SECRET || "my-secret-key",
      resave: false,
      saveUninitialized: false,
    })
  );
  
  
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
  });