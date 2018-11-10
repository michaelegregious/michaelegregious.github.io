import React, { Component } from 'react';
import ProfileHero from './profile-hero';
import Navbar from './navbar';
import About from './about';
import Projects from './projects';
import Footer from './footer';
import './styles/main.scss';
import { Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProfileHero />
        <Element name="about" className="element">
          <About />
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
