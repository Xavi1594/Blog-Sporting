import React from 'react'

export const FooterComponent = () => {

    const currentYear = new Date().getFullYear();
  return (
   <footer className='bg-primary text-center fixed-bottom'>
      <p>  &#169; {currentYear} El balón de Gijón </p>
   </footer>
  )
}
