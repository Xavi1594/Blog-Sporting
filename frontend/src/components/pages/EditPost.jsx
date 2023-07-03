import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Save } from "react-bootstrap-icons";

export const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editedPost, setEditedPost] = useState({
    titulo_post: "",
    contenido_post: "",
    img_post: null,
  });
  const [initialPost, setInitialPost] = useState({
    titulo_post: "",
    contenido_post: "",
    img_post: null,
  });

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEditedPost(data);
        setInitialPost(data);
      })
      .catch((error) => {
        console.error("Error al obtener el detalle del post:", error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setEditedPost((prevState) => ({
      ...prevState,
      img_post: file,
    }));
  };

  const handleSaveClick = async () => {
    try {
      const formData = new FormData();
      formData.append("titulo_post", editedPost.titulo_post);
      formData.append("contenido_post", editedPost.contenido_post);

      if (editedPost.img_post) {
        formData.append("img_post", editedPost.img_post);
      }

      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        navigate(`/post/${id}`);
      } else {
        throw new Error("Error al editar el post");
      }
    } catch (error) {
      console.error("Error al editar el post:", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Editar Post</h1>
          <form>
            <div className="form-group">
              <label>Título:</label>
              <input
                type="text"
                name="titulo_post"
                className="form-control"
                value={editedPost.titulo_post || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Contenido:</label>
              <textarea
                className="form-control"
                rows="15"
                name="contenido_post"
                value={editedPost.contenido_post || ""}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Imagen:</label>
              <input
                type="file"
                name="img_post"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
              {initialPost.img_post && (
                <p className="text-muted">
                  Imagen actual: {initialPost.img_post}
                </p>
              )}
            </div>
            <div>
              <button
                className="btn btn-primary mt-2 w-100"
                type="button"
                onClick={handleSaveClick}
              >
                <Save /> Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
