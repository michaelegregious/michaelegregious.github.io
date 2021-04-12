import React, { Component } from 'react';
import ProfileHero from './ProfileHero';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import './styles/main.scss';
import { Element } from 'react-scroll';
import WorkExperience from './Work-Experience';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProfileHero />
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="work experience" className="element">
          <WorkExperience/>
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
