import React from 'react';

const Footer = props => {
  return (
    <footer class="footer has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop">
            <p>
              <strong class="has-text-weight-semibold">
                <a href="https://www.npmjs.com/package/bulma-start">
                  bulma-start@0.0.1
                </a>
              </strong>
            </p>
            <p>
              <small>
                Source code licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
              </small>
            </p>
            <p style={{ marginTop: '1rem' }}>
              <a href="http://bulma.io">
                <img
                  src="made-with-bulma.png"
                  // src="public/graceShopperScreenCap.png"
                  alt="Made with Bulma"
                  width="128"
                  height="24"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
