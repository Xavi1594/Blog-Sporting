const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./dbConecction"); 


const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};
app.use(cors(corsOptions));

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


app.get("/posts",  (req, res) => {
    db.query(
      "SELECT id, img_post, titulo_post, fecha_post, contenido_post  FROM posts ",
      (err, results) => {
        if (err) {
          console.error("Error al obtener los posts:", err);
          res.status(500).json({
            message:
              "Ha ocurrido un error al obtener los posts. Por favor, intenta más tarde.",
          });
          return;
        }
        res.json(results);
      }
    );
  });
  



app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
