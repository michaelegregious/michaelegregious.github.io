import React from "react";

const About = (props) => {
  return (
    <section class="section is-primary">
      <div class="container">
        <div class="columns content">
          <div class="column">
            <h3 class="subhead-text">About Me</h3>
            <p>
              I'm a full-stack Software Engineer living in Chicago, Illinois.
            </p>
            <p>
              I have a diverse educational and work background, including five
              years of small business management experience, a stint as a
              precision metal worker, experience in education and youth
              mentorship, legal and technical writing, editing, creative problem
              solving and fixing things. I like variety in my work, and I became
              a programmer because I'm passionate about building things, and I
              love language.
            </p>
            <p>
              I recently celebrated two years as a professional Software
              Engineer at a great company. I had the opportunity there to build
              from scratch several iterations of an ultimately very impressive
              and successful natural language processing (NLP) app,{" "}
              <a href="https://greenkeytech.com/focus-studio/">Focus Studio</a>,
              that extracted nuanced and domain-specific jargon from real-time
              dialog. Collaborating with a close-knit team of thoughtful
              engineers and data scientists has been a very rewarding
              experience.
            </p>
            <p>
              I'm an enthusiastic programmer; I think the work presents a great
              combination of technical challenge, collaborative dialog and
              goal-setting and iterative improvement. I enjoy both the design
              challenge of building elegant, intutive user-interfaces on the
              front-end, as well as the structural and architectural
              problem-solving of the back-end.
            </p>
            <p>
              I'm motivated by writing clean, reusable code, that is easily
              maintainable, legible and testable.
            </p>
          </div>
          <div class="column">
            <h3 class="subhead-text">Skills</h3>
            <p>
              I'm a lifelong learner, and am always happy to incorporate new
              technologies. I'm most experienced working with Typescript/JS
              frameworks and libraries (incl. React/Redux, Node, Express,
              Objection, Knex, Sequelize, RxJS, JQuery, React Native, Webpack,
              Mocha, Chai, Jest, etc.). I've enjoyed work with GoLang, raw SQL,
              Docker and microservices architecture. I'm comfortable writing
              RESTful APIs, designing and implementing coherent and extensible
              systems architecture.
            </p>
            <p>
              I have a strong appreciation for the structural benefits of
              object-oriented programming, and an even stronger love for simple
              functional composition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
