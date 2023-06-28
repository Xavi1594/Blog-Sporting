import React, { useEffect, useState } from 'react';

export const ApiPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Error al obtener los posts:', error);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
            <img
            src={post.img_post}
            alt='foto'
            />
          <h2>{post.titulo_post}</h2>
          <p>{post.contenido_post}</p>
       
        </div>
      ))}
    </div>
  );
};
