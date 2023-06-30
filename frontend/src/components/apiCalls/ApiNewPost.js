import React, { useState } from 'react';

export const ApiNewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleCreatePost = async () => {
    try {
      const formData = new FormData();
      formData.append('titulo_post', title);
      formData.append('contenido_post', content);
      formData.append('imagen', image);

      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setTitle('');
        setContent('');
        setImage(null);
      } else {
        throw new Error('Error al crear el post');
      }
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Nueva entrada</h2>
      <form>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contenido</label>
          <textarea
            className="form-control"
            rows="15"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        {image && (
          <div className="form-group">
            <label>Vista previa de la imagen:</label>
            <img
              src={`http://localhost:3000/${image.name}`}
              alt="Vista previa"
              className="img-fluid"
            />
          </div>
        )}
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={handleCreatePost}
        >
          Crear entrada
        </button>
      </form>
    </div>
  );
};
