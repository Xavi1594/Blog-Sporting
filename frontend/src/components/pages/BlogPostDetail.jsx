import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BlogPostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error al obtener el detalle del post:", error);
      });
  }, [id]);

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <img src={`http://localhost:3000/${post.img_post}`} alt="Imagen del post" />
      <h1>{post.titulo_post}</h1>
      <p>Fecha de publicación: {post.fecha_publicacion}</p>
      <p>{post.contenido_post}</p>
      <button>Editar</button>
      <button>Guardar (modo edición)</button>
      <button>Borrar</button>
    </div>
  );
};
