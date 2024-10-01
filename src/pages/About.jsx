import React from "react";

function About() {
    return (
      <section className="about" id="about">
        <div className="about-img">
          <img src="assets/images/aboutMe.png" alt="About Me" />
        </div>
  
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Software Developer</h3>
          <p>Hello! I'm Roberto Ulloa, a passionate software developer with a love for constant learning and creativity. Originally from Mexico, I moved to the US two years ago and have been immersing myself in the tech industry ever since. My journey in learning English began nine months before my move, and I've embraced every challenge with enthusiasm.</p>
          <p>In addition to coding, I have a wide range of interests including dance, poetry, acting, painting, and cooking. These hobbies not only fuel my creativity but also inspire my approach to software development. My goal is to continue advancing my skills and to use my knowledge to help others, whether it's through developing innovative solutions or supporting my community.</p>
          <a href="https://github.com/Robert-Ulloa/Robert-Ulloa/blob/main/README.md" className="btn">Read more</a> 
        </div>
      </section>
    );
  }

