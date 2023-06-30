import React, { useEffect, useState } from "react";

export const ApiPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error al obtener los posts:", error);
      });
  }, []);

  return (
    <div
      className="mt-3"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "10px",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <img
            src={`http://localhost:3000/${post.img_post}`}
            className="img-fluid rounded mt-3"
            style={{ width: "100px", height: "100px", margin: "0 auto" }}
            alt="Imagen del post"
            onClick={() => console.log("Click en la imagen de la entrada")}
          />

          <h2
            style={{
              fontSize: "20px",
              marginTop: "10px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => console.log("Click en el título de la entrada")}
          >
            {post.titulo_post}
          </h2>
          <p style={{ marginBottom: "10px", textAlign: "center" }}>
            {post.fecha_publicacion}
          </p>
          <p style={{ marginBottom: "10px", textAlign: "center" }}>
            {post.contenido_post.substring(0, 50)}...
          </p>
          <button
            className="btn btn-danger"
            onClick={() => console.log("Click en el botón Borrar")}
          >
            &times;
          </button>
        </article>
      ))}
    </div>
  );
};
