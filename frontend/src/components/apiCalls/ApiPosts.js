import React, { useEffect, useState } from "react";

export const ApiPosts = () => {
  const [posts, setPosts] = useState([]);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

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

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualizar la lista de posts después de eliminar
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      } else {
        throw new Error("Error al eliminar el post");
      }
    } catch (error) {
      console.error("Error al eliminar el post:", error);
    }
  };

  const groupedPosts = [];
  const postsPerGroup = 3;
  for (let i = 0; i < posts.length; i += postsPerGroup) {
    groupedPosts.push(posts.slice(i, i + postsPerGroup));
  }

  const truncateText = (text, maxLength) => {
    const words = text.split(" ");
    if (words.length <= maxLength) {
      return text;
    }
    return words.slice(0, maxLength).join(" ") + "...";
  };

  return (
    <div className="mt-3">
      {groupedPosts.map((group, index) => (
        <div className="row" key={index}>
          {group.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card h-100">
                <div style={{ maxHeight: '200px', overflow: 'hidden' }}>
                  <img
                    src={`http://localhost:3000/${post.img_post}`}
                    className="card-img-top"
                    alt="Imagen del post"
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    onClick={() => console.log("Click en la imagen de la entrada")}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2 text-center" onClick={() => console.log("Click en el título de la entrada")}>
                    {post.titulo_post}
                  </h5>
                  <p className="card-text mb-2 flex-grow-1" style={{ overflow: 'hidden' }}>
                    {post.fecha_publicacion}
                  </p>
                  <p className="card-text mb-2" style={{ maxHeight: '100px', overflow: 'hidden' }}>
                    {truncateText(post.contenido_post, 50)}
                  </p>
                  <button
                    className="btn btn-danger mt-auto mb-5"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    Borrar &times;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
