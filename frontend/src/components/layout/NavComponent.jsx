import React from "react";
import { useNavigate } from "react-router-dom";

export const NavComponent = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleCreatePost = () => {
    navigate("/post/nuevo");
  };

  return (
    <div>
      <header
        className="text-center"
        style={{
          background: "#e30613",
          color: "#ffffff",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <h1
            className="mr-4"
            style={{ cursor: "pointer" }}
            onClick={handleTitleClick}
          >
            EL BALÓN DE GIJÓN
          </h1>
          <div style={{ width: "80px", height: "160px", marginLeft: "20px" }}>
            <img
              src="pelota.png"
              alt="Logo de un balón"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </header>
      <nav
        className="text-center py-2"
        style={{
    
          color: "#ffffff",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="container">
          <button onClick={handleCreatePost} className="btn btn-success m-1">
            Añadir entrada
          </button>
        </div>
      </nav>
    </div>
  );
};
