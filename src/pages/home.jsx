import React from 'react';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/images/profile1.png';  

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Roberto Ulloa</h1>
        <h3>And I'm a <span>Software Developer</span></h3>
        <p>Passionate about constant learning and growth, I like to bring creativity and diversity to my software development career. 
          My goal is to continue enhancing my skills while helping others along the way.
        </p>
        <div className="social-media">
          <a href="https://github.com/Robert-Ulloa">
            <FontAwesomeIcon icon={faSquareGithub} size="2x" />
          </a> 
          <a href="https://www.linkedin.com/in/roberto-antonio-ulloa-cruz-30135b317/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a> 
          <a href="mailto:orberto@robertoulloa.com">
            <FontAwesomeIcon icon={faSquareEnvelope} size="2x" />
          </a> 
        </div>
        <a href="https://docs.google.com/document/d/1s3rTxkAxYEGnGXW60GKdj9qJkR2rrJU_-CL5cgodq5s/edit?usp=sharing" className="btn">Download CV</a> 
      </div>

      <div className="home-img">
        <img src={profileImage} alt="Profile" /> 
      </div>
    </section>
  );
}

export default Home;