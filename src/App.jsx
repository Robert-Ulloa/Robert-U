import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Home from './pages/home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />   
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;