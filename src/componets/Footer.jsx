import React from 'react';
import '../styles/Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 by Roberto Ulloa. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/Robert-Ulloa" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/roberto-antonio-ulloa-cruz-30135b317/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/rob.ulloac/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;