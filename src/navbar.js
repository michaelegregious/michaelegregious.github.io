import React from 'react';
import nameLogo from './img/homePageLogo.png';

const Navbar = props => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://michaelegregious.github.io/">
          <img src={nameLogo} />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start" />

        <div class="navbar-end">
          <a class="navbar-item">About Me</a>

          <a class="navbar-item">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
