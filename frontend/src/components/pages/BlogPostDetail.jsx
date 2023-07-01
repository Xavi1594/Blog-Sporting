import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleEditClick = () => {
    navigate(`/post/editar/${id}`);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <img
            src={`http://localhost:3000/${post.img_post}`}
            className="img-fluid mb-4"
            alt="Imagen del post"
          />
          <h1 className="text-center">{post.titulo_post}</h1>
          <p className="text-center">Fecha de publicación: {post.fecha_publicacion}</p>
          <p>{post.contenido_post}</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary me-2" onClick={handleEditClick}>
              Editar
            </button>
            <button className="btn btn-danger">Borrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
