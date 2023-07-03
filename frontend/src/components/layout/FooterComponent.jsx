import React from 'react';

export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="container-fluid py-3 mt-5"
      style={{
        background: "#e30613",
        color: "#ffffff",
        backdropFilter: "blur(5px)",
        padding: "20px",
        marginTop: "auto",
      }}
    >
      <div className="container d-flex justify-content-center">
        <p className="h3">&#169; {currentYear} El balón de Gijón</p>
      </div>
    </footer>
  );
};
