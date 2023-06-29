import React from 'react'

export const FooterComponent = () => {

    const currentYear = new Date().getFullYear();
  return (
   <footer className=' text-center fixed-bottom' style={{ background: "#e30613", color: "#ffffff", backdropFilter: "blur(5px)" }}>
      <p>  &#169; {currentYear} El balón de Gijón </p>
   </footer>
  )
}
