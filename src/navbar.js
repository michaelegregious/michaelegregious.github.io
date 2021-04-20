import React from "react";
import { Link as ScrollLink } from "react-scroll";
import nameLogo from "./img/homePageLogo.png";

const Navbar = (props) => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://michaelegregious.github.io/">
          <img src={nameLogo} alt="michael bush" />
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
          <ScrollLink
            className="navbar-item"
            to="about"
            smooth={true}
            duration={750}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            className="navbar-item"
            to="experience"
            smooth={true}
            duration={750}
          >
            Work
          </ScrollLink>
          <ScrollLink
            className="navbar-item"
            to="projects"
            smooth={true}
            duration={750}
          >
            Projects
          </ScrollLink>
          <a
            href="https://github.com/michaelegregious"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-item"
          >
            <i class="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-j-bush/"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-item"
          >
            <i class="fab fa-linkedin" />
          </a>

          <a href="mailto:michael.egregious@gmail.com" class="navbar-item">
            <i class="fas fa-envelope" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
