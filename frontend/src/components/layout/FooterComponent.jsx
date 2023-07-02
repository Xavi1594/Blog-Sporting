import React from 'react';

export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
    role="contentinfo"
    className="text-center container-fluid  py-3"
    style={{
      background: "#e30613",
      color: "#ffffff",
      backdropFilter: "blur(5px)",
      padding: "20px",
    }}
  >
      <div className="container">
        <p className="h3">&#169; {currentYear} El balón de Gijón</p>
      </div>
    </footer>
  );
};
