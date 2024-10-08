import React from 'react';
import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons'; 

// Import images
import popcornImage from '../assets/images/Popcornpicks.png';
import rpcImage from '../assets/images/RPC.png';
import weatherImage from '../assets/images/weather.png';
import blogImage from '../assets/images/blog.png';
import taskBoardImage from '../assets/images/task board.png';
import webDesignImage from '../assets/images/1.png';


const projects = [
  {
    title: 'PopcornPicks',
    imgSrc: popcornImage,
    description:
      'PopcornPicks is an interactive movie watchlist application that allows users to search for movies, add them to a watchlist, and create a top 5 list of their favorite movies. This project was created as part of an interactive front-end development challenge.',
    liveLink: 'https://robert-ulloa.github.io/PopcornPicks/',
  },
  {
    title: 'Rock Paper Scissors Game',
    imgSrc: rpcImage,
    description:
      'This project is a simple Rock Paper Scissors game built with HTML, CSS, and JavaScript. The game allows you to play against the computer and keeps track of your score. This project was created following the tutorial by Web Dev Simplified.',
    liveLink: 'https://robert-ulloa.github.io/rock-paper-scissors/',
  },
  {
    title: 'AtmosAware',
    imgSrc: weatherImage,
    description:
      'Welcome to the 5-Day Weather Dashboard! This application allows you to view the current and future weather conditions for multiple cities. The user-friendly interface helps you plan your trips by providing accurate weather forecasts.',
    liveLink: 'https://robert-ulloa.github.io/AtmosAware/',
  },
  {
    title: 'My Personal Blog',
    imgSrc: blogImage,
    description:
      'This is a personal blog application where users can create and view blog posts. Users can switch between light and dark modes and navigate back to the form from the posts page.',
    liveLink: 'https://robert-ulloa.github.io/my-personal-blog/',
  },
  {
    title: 'Task Board',
    imgSrc: taskBoardImage,
    description:
      'Task Board is a simple Kanban board for task management. It allows you to create, manage, and track tasks through different stages of completion.',
    liveLink: 'https://robert-ulloa.github.io/Task-Board/',
  },
  {
    title: 'Web Design Upgrade',
    imgSrc: webDesignImage,
    description:
      'In this project, I focused on enhancing the semantics of the HTML and CSS to improve the overall structure for a better design and maintain a cleaner CSS stylesheet.',
    liveLink: 'https://robert-ulloa.github.io/challenge1-bootcamp/',
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>

      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-box">
            <img src={project.imgSrc} alt={`${project.title} Project`} />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faShareSquare} /> 
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;