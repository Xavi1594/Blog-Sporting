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
      <h2 className="mb-4">Crear nueva entrada</h2>
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input
            type="file"
            className="form-control-file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCreatePost}
        >
          Crear entrada
        </button>
      </form>
    </div>
  );
};
