import React from "react";
import { useNavigate } from "react-router-dom";

export const NavComponent = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/post/nuevo");
  };

  return (
    <header className="text-center" style={{ background: "#e30613", color: "#ffffff", backdropFilter: "blur(5px)" }}>
      <div className="d-flex align-items-center justify-content-center">
        <h1 className="mr-4">El balón de Gijón</h1>
        <div style={{ width: "80px", height: "160px", marginLeft: "20px" }}>
          <img 
            src="logosporting1.png"
            alt="Logo del Real Sporting de Gijón"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
      <nav>
        <button onClick={handleCreatePost} className="btn btn-success m-1">Añadir entrada</button>
      </nav>
    </header>
  );
};
