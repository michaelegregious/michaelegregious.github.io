import React from 'react';
import SingleProject from './single-project';
import graceShopper from './img/graceShopperScreenCap.png';
import memenomics from './img/memenomicsScreencap.png';
import urbanForager from './img/urbanForagerScreencap.png';

const Projects = () => {
  return (
    <section class="section hero is-primary">
      <div className="container content">
        <h3 class="subhead-text">Projects</h3>
        <br />
        <SingleProject
          img={memenomics}
          name="Memenomics"
          webUrl="http://memenomics.herokuapp.com/"
          gitUrl="https://github.com/Initial-Meme-Offering/initial-meme-offering"
          description={
            <div>
              <p>
                A stock market app where traders can buy, sell and track
                trending meme stocks and indices (mutual funds).
              </p>
              <p>
                Full-stack Javascript with React, Redux, Node.js, Express,
                PostgreSQL along with Victory Charts and Bulma.io (Sass).
              </p>
            </div>
          }
        />
        <SingleProject
          img={urbanForager}
          name="Urban Forager"
          webUrl="https://github.com/michaelegregious/urban-forager"
          gitUrl="https://github.com/michaelegregious/urban-forager"
          description={
            <div>
              <p>
                A crowd-sourcing mobile app for mapping fruit trees in your
                neighborhood.
              </p>
              <p>
                Full-stack Javascript with React, Redux, Node.js, Express,
                PostgreSQL, and the Google Maps API.
              </p>
            </div>
          }
        />
        <SingleProject
          img={graceShopper}
          name="Grace Shopper"
          webUrl="http://grace-supertrooper-shopper.herokuapp.com/"
          gitUrl="https://github.com/1806GraceShop/GraceShopper"
          description={
            <p>
              An e-commerce app with end-to-end authentication and OAuth
              integration. Fullstack Javascript with React, Redux, Node.js,
              Express, and PostgreSQL.
            </p>
          }
        />
      </div>
    </section>
  );
};

export default Projects;
