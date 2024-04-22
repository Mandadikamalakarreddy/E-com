import React from 'react'
import './Footer.css'
const Footer = () => {
    function getCurrentYear() {
        return new Date().getFullYear();
      }
      
        const currentYear = getCurrentYear();

  return (
    <div>
         <footer className="footer">
      <div className="container">
        <p>© {currentYear} My Website. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
