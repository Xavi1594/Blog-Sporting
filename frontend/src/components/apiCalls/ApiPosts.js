import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const ApiPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength).trim() + "...";
  };

  const getImageStyles = (imageUrl) => {
    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
    };
  };

  return (
    <div className="mt-3 container">
      <div className="row">
        {currentPosts.map((post) => (
          <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
            <div className="card h-100">
              <NavLink to={`/post/${post.id}`} activeClassName="active">
                <div className="image-container" style={{ height: "250px" }}>
                  <div className="image" style={getImageStyles(`http://localhost:3000/${post.img_post}`)}></div>
                </div>
              </NavLink>
              <div className="card-body">
                <NavLink
                  to={`/post/${post.id}`}
                  className="h2 mb-2 text-center"
                  activeClassName="active"
                  style={{ textDecoration: "none" }}
                >
                  {post.titulo_post}
                </NavLink>
                <p className="card-text mb-2">{formatDate(post.fecha_post)}</p>
                <p className="card-text mb-2">{truncateText(post.contenido_post, 50)}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mb-5">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </a>
          </li>
          {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(
            (pageNumber) => (
              <li
                key={pageNumber + 1}
                className={`page-item ${
                  currentPage === pageNumber + 1 ? "active" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => paginate(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </a>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(posts.length / postsPerPage)
                ? "disabled"
                : ""
            }`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
