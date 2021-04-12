import React from 'react';

const About = props => {
  return (
    <section class="section is-primary">
      <div class="container">
        <div class="columns content">
          <div class="column">
            <h3 class="subhead-text">About Me</h3>
            <p>
              I'm a Full-stack Software Engineer living in Chicago, Illinois.
            </p>
            <p>
              I have a diverse educational and work background, including five years
              of small business management experience, a stint as a precision metal worker, experience in education and youth
              mentorship, legal and technical writing, editing, creative problem solving and fixing
              things. I like variety in my work, and I became a programmer
              because I'm passionate about building things, and I love language.
            </p>
            <p>
              I recently celebrated two years as a professional Software Engineer at a great company. I had the opportunity there to build from scratch several iterations of an ultimately impressive and successful natural language processing (NLP) app, <a href="https://greenkeytech.com/focus-studio/">Focus Studio</a>, that extracted nuanced and domain-specific jargon from real-time dialog. Collaborating with a close-knit team of thoughtful engineers and data scientists has been a very rewarding experience.
              </p>
              <p> 
              I'm an enthusiastic programmer; I think the work presents a great combination of technical challenge, collaborative dialog and goal-setting and iterative improvement. I enjoy both the design challenge of building
              elegant, intutive user-interfaces on the front-end, as well as the structural and architectural problem-solving of the back-end.
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
              React, Node), and with modern Typescript and Javascript. I appreciate the power
              and flexibility that Redux (state machine/flux-type architecture more generally) adds to front end architecture, mirroring database
              schema with normalized data on the front end. 
            </p>
            <p>
              I'm a lifelong learner, and am always happy to embrace new technologies. I've worked with a variety of JS frameworks and libraries (Sequelize, Objection, Knex, JQuery, React Native, Webpack, Mocha, Chai, Jest, etc.). I've also worked with GoLang (and the GoBuffalo ORM), I'm familiar with Docker and thinking in terms of microservices. I'm comfortable writing RESTful APIs, as well as with CSS, Sass, HTML5, Git, Github and Git workflow tools, SQL, Travis,
              CI, Heroku. I've also dabbled with a number of
              external APIs at Google, Amazon, Github, etc. I'm continually
              learning and exploring new technologies.
            </p>
            <p>
              I have a little experience with C++ and Python. I have a strong appreciation for the structural benefits of object-oriented
              programming, and an even stronger love for simple functional
              composition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
