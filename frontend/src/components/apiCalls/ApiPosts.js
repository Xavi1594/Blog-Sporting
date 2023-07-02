import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../layout/SearchBarComponent";

export const ApiPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (response.ok) {
          const data = await response.json();
          const sortedPosts = data.sort((a, b) => {
            const dateA = new Date(a.fecha_post);
            const dateB = new Date(b.fecha_post);
            return dateB - dateA;
          });
          setPosts(sortedPosts);
          setFilteredPosts(sortedPosts);
        } else {
          throw new Error("Error al obtener los posts");
        }
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength).trim() + "...";
  };

  const searchPosts = (searchTerm) => {
    if (searchTerm) {
      const filtered = posts.filter((post) =>
        post.titulo_post.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <div className="mt-3 mb-3  container">
      <SearchBar onSearch={searchPosts} />
      <section className="row mt-3">
        {currentPosts.map((post) => (
          <article className="col-lg-4 col-md-6 mb-4" key={post.id}>
            <div className="card h-100">
              <NavLink to={`/post/${post.id}`} activeClassName="active">
                <img
                  src={`http://localhost:3000/${post.img_post}`}
                  className="card-img-top img-fluid"
                  alt="Imagen del post"
                  style={{ height: "250px", objectFit: "cover" }}
                />
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
                <p className="card-text mb-2">
                  {truncateText(post.contenido_post, 50)}
                </p>
              </div>
              <div className="card-footer"></div>
            </div>
          </article>
        ))}
      </section>
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
          {[
            ...Array(Math.ceil(filteredPosts.length / postsPerPage)).keys(),
          ].map((pageNumber) => (
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
          ))}
          <li
            className={`page-item ${
              currentPage === Math.ceil(filteredPosts.length / postsPerPage)
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
