import React, { Component } from 'react';
import ProfileHero from './profile-hero';
import Navbar from './navbar';
import About from './about';
import Projects from './projects';
import Footer from './footer';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProfileHero />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
