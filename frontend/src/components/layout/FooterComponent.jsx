import React from 'react';

export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center mt-4" style={{ background: "#e30613", color: "#ffffff", backdropFilter: "blur(5px)" }}>
      <div className="container py-3">
        <p>&#169; {currentYear} El balón de Gijón</p>
      </div>
    </footer>
  );
};
