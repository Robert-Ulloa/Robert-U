import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brands icons
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Solid icon

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 by Roberto Ulloa. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/Robert-Ulloa" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/roberto-antonio-ulloa-cruz-30135b317/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/rob.ulloac/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <FontAwesomeIcon icon={faAngleUp} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;