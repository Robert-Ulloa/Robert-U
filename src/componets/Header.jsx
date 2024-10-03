import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">Portfolio</a>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;