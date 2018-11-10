import React from 'react';

const About = props => {
  return (
    <section class="section is-primary">
      <div class="container">
        <div class="columns content">
          <div class="column">
            <h3 class="subhead-text">About Me</h3>
            <p>
              I'm a full-stack software developer living in Chicago, Illinois.
            </p>
            <p>
              I have a diverse educational and work background, including years
              of small business management experience, education and youth
              mentorship, writing, editing, creative problem solving and fixing
              things. I like variety in my work, and I became a programmer
              because I'm passionate about building things, and I love language.
            </p>
            <p>
              I recently attended Fullstack Academy (a coding bootcamp in
              Chicago), where I fell in love with other aspects of software like
              iterative, agile development, algorithmic patterns, and data
              architecture. I enjoy both the design challenge of building
              elegant, intutive user-interfaces on the front-end, as well as the
              structural problem-solving of the back-end.
            </p>
            <p>
              I'm motivated by writing clean, reusable code, that is easily
              maintainable, legible and testable.
            </p>
          </div>
          <div class="column">
            <h3 class="subhead-text">Skills</h3>
            <p>
              I'm most confident with the PERN stack (PostgreSQL, Express,
              React, Node), and vanilla (ES6) Javascript. I appreciate the power
              and flexibility that Redux adds to React, mirroring database
              schema with normalized data on the front end.
            </p>
            <p>
              I have experience with C++ and Python. I have a strong
              appreciation for the structural benefits of object-oriented
              programming, and an even stronger love for simple functional
              composition.
            </p>
            <p>
              I've worked with Sequelize, JQuery, REST, CSS, Sass, HTML5, Git,
              Github and Git workflow tools, React Native, SQL, Webpack, Travis,
              CI, Heroku, Mocha, Chai. I've also dabbled with a number of
              external APIs at Google, Amazon, Github, etc. I'm continually
              learning and exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
