import React from 'react';
import graceShopper from './img/graceShopperScreenCap.png';
import memenomics from './img/memenomicsScreencap.png';
import urbanForager from './img/urbanForagerScreencap.png';

const Projects = props => {
  return (
    <section class="section hero is-primary">
      <div className="container content">
        <h3 class="subhead-text">Projects</h3>
        <br />
        <div className="columns">
          <div className="column is-5">
            <a href="http://memenomics.herokuapp.com/">
              <img src={memenomics} />
            </a>
          </div>
          <div className="column">
            <h3 class="subhead-text">Memenomics</h3>
            <p>
              A stock market app where traders can buy, sell and track trending
              meme stocks and indices (mutual funds).
            </p>
            <p>
              Full-stack Javascript with React, Redux, Node.js, Express,
              PostgreSQL along with Victory Charts and Bulma.io (Sass).
            </p>
            <p>
              Deployed at:&nbsp;&nbsp;
              <a href="http://memenomics.herokuapp.com/" class="has-text-link">
                memenomics.herokuapp.com
              </a>
              <br />
              Source at:&nbsp;&nbsp;
              <a
                href="https://github.com/Initial-Meme-Offering/initial-meme-offering"
                class="has-text-link"
              >
                github.com/Initial-Meme-Offering
              </a>
            </p>
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column is-5">
            <a href="http://memenomics.herokuapp.com/">
              <img src={urbanForager} />
            </a>
          </div>
          <div className="column is-7">
            <h3 class="subhead-text">Urban Forager</h3>
            <p>
              A crowd-sourcing mobile app for mapping fruit trees in your
              neighborhood.
            </p>
            <p>
              Full-stack Javascript with React, Redux, Node.js, Express,
              PostgreSQL, and the Google Maps API.
            </p>
            Source at:&nbsp;&nbsp;
            <a
              href="https://github.com/michaelegregious/urban-forager"
              class="has-text-link"
            >
              github.com/urban-forager
            </a>
          </div>
        </div>
        <br />
        <div className="columns">
          <div className="column is-5">
            <img src={graceShopper} />
          </div>
          <div className="column is-7">
            <h3 class="subhead-text">Grace Shopper E-Commerce Website</h3>
            <p>
              An e-commerce app with end-to-end authentication and OAuth
              integration. Fullstack Javascript with React, Redux, Node.js,
              Express, and PostgreSQL.
            </p>
            <p>
              Deployed at:&nbsp;&nbsp;
              <a
                href="http://grace-supertrooper-shopper.herokuapp.com/"
                class="has-text-link"
              >
                grace-supertrooper-shopper.herokuapp.com
              </a>
              <br />
              Source at:&nbsp;&nbsp;
              <a
                href="https://github.com/1806GraceShop/GraceShopper"
                class="has-text-link"
              >
                github.com/Initial-Meme-Offering
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
