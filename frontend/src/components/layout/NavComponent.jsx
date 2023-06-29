import React from "react";

export const NavComponent = () => {
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
        <button className="btn btn-success mr-3">Añadir entrada</button>
      </nav>
    </header>
  );
};
