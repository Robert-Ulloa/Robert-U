import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Portfolio</Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;