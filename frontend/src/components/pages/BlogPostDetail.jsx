import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

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
          <div className="d-flex justify-content-center"> 
            <img
              src={`http://localhost:3000/${post.img_post}`}
              className="img-fluid rounded mb-4"
              alt="Imagen del post"
            />
          </div>
          <div className="post-content" style={{ background: "#f7f7f7", padding: "20px" }}>
            <h1 className="text-center">{post.titulo_post}</h1>
            <p className="text-center">Fecha de publicación: {formatDate(post.fecha_post)}</p>
            <p>{post.contenido_post}</p>
          </div>
          <div className="d-flex justify-content-center mt-2">
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
