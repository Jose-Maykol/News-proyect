import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-list-media">
        <button className="footer-icon-media"><i className="bi bi-facebook"></i></button>
        <button className="footer-icon-media"><i className="bi bi-instagram"></i></button>
        <button className="footer-icon-media"><i className="bi bi-twitter"></i></button>
      </div>
      <div className="footer-content">
        <p>© Copyright. Todos los derechos reservados.</p>
      </div>
    </footer> 
  );
}
 
export default Footer;