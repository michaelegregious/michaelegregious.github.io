import React from "react";

const Footer = (props) => {
  return (
    <footer class="footer has-text-centered is-primary">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <p>
              <strong class="has-text-weight-bold">
                Copyright © Michael Bush 2021
              </strong>
              <br />
              <small>
                Iterative development means everything is always under
                construction
              </small>
              <br />
              <small>...and that's a good thing.</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
