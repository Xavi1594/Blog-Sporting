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
          El balón de Gijón
        </h1>
        <div style={{ width: "80px", height: "160px", marginLeft: "20px" }}>
          <img
            src="pelota.png"
            alt="Logo de un balón"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
      <nav
        className=" text-black py-2"
        style={{
          background: "rgb(201, 218, 233)",
        }}
      >
        <div className="container">
          <button onClick={handleCreatePost} className="btn btn-success m-1">
            Añadir entrada
          </button>
        </div>
      </nav>
    </header>
  );
};
