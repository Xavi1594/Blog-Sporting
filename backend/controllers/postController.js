const db = require("../dbConecction");
const path = require("path");
const fs = require("fs");

exports.getPosts = (req, res) => {
  db.query(
    "SELECT id, img_post, titulo_post, fecha_post, contenido_post FROM posts",
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
};

exports.getPostById = (req, res) => {
  const postId = req.params.id;

  db.query(
    "SELECT id, img_post, titulo_post, fecha_post, contenido_post FROM posts WHERE id = ?",
    [postId],
    (err, results) => {
      if (err) {
        console.error("Error al obtener el detalle del post:", err);
        res.status(500).json({
          message:
            "Ha ocurrido un error al obtener el detalle del post. Por favor, intenta más tarde.",
        });
        return;
      }

      if (results.length === 0) {
        res
          .status(404)
          .json({ message: "No se encontró el post con el ID especificado." });
        return;
      }

      const post = results[0];
      res.json(post);
    }
  );
};

exports.createPost = (req, res) => {
  const newPost = {
    user_img: req.file.filename,
    title: req.body.titulo_post,
    content: req.body.contenido_post,
    Id: req.session.Id,
    createdAt: req.session.fecha_post,
  };

  if (newPost.title && newPost.content) {
    db.query(
      "INSERT INTO posts (titulo_post, contenido_post, Id, fecha_post, img_post) VALUES (?, ?, ?, ?, ?)",
      [
        newPost.title,
        newPost.content,
        newPost.Id,
        newPost.createdAt,
        newPost.user_img,
      ],
      (err, results) => {
        if (err) {
          console.error("Error al crear el post:", err);
          res.status(500).json({
            message:
              "Ha ocurrido un error al crear el post. Por favor, intenta más tarde.",
          });
          return;
        }
        newPost.id = results.insertId;
        res.status(201).json(newPost);
      }
    );
  } else {
    res
      .status(400)
      .send({ message: "El post debe tener un título y un contenido." });
  }
};

exports.deletePost = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM posts WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al obtener el post:", err);
      res.status(500).json({
        message:
          "Ha ocurrido un error al obtener el post. Por favor, intenta más tarde.",
      });
      return;
    }

    if (result.length === 0) {
      res
        .status(404)
        .json({ message: "No se encontró el post con el ID especificado." });
      return;
    }

    const post = result[0];
    const filePath = path.join(__dirname, "..", "uploads", post.img_post);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error al eliminar la foto del post:", err);
        res.status(500).json({
          message:
            "Ha ocurrido un error al eliminar la foto del post. Por favor, intenta más tarde.",
        });
        return;
      }

      const deleteSql = "DELETE FROM posts WHERE id = ?";
      db.query(deleteSql, [id], (err, result) => {
        if (err) {
          console.error("Error al eliminar el post:", err);
          res.status(500).json({
            message:
              "Ha ocurrido un error al eliminar el post. Por favor, intenta más tarde.",
          });
          return;
        }

        res.json({ message: "El post y la foto han sido eliminados correctamente." });
      });
    });
  });
};

exports.updatePost = (req, res) => {
  const postId = req.params.id;
  const { titulo_post, contenido_post } = req.body;
  const updatedAt = new Date();

  if (!titulo_post && !contenido_post) {
    res.status(400).json({
      message:
        "Debes proporcionar al menos un campo (título o contenido) para editar el post.",
    });
    return;
  }

  const sqlUpdateFields = ["titulo_post = ?", "contenido_post = ?", "fecha_post = ?"];
  const sqlUpdateValues = [titulo_post, contenido_post, updatedAt];

  let img_post = null;
  if (req.file) {
    img_post = req.file.filename;
    sqlUpdateFields.push("img_post = ?");
    sqlUpdateValues.push(img_post);
  }

  const sql = `UPDATE posts SET ${sqlUpdateFields.join(", ")} WHERE id = ?`;
  db.query(
    sql,
    [...sqlUpdateValues, postId],
    (err, result) => {
      if (err) {
        console.error("Error al editar el post:", err);
        res.status(500).json({
          message:
            "Ha ocurrido un error al editar el post. Por favor, intenta más tarde.",
        });
        return;
      }

      if (result.affectedRows === 0) {
        res
          .status(404)
          .json({ message: "No se encontró el post con el ID especificado." });
        return;
      }

      res.json({ message: "El post ha sido editado correctamente." });
    }
  );
};
