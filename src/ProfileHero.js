import React from "react";
import portfolioPic from "./img/portfolioPic5.jpg";

const ProfileHero = (props) => {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <figure class="image container is-256x256">
              <img
                alt="website page photo"
                class="is-rounded"
                src={portfolioPic}
              />
            </figure>
            <br />
            <div class="content has-text-centered">
              <h2 class="title is-2 name-headline">Michael Bush</h2>
              <h4 class="subtitle is-4 name-headline">Software Engineer</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileHero;
