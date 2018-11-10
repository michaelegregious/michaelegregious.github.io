import React from 'react';

const SingleProject = props => {
  const { img, name, description, webUrl, gitUrl } = props;
  return (
    <div>
      <div className="columns">
        <div className="column is-5">
          <a href={webUrl}>
            <img src={img} />
          </a>
        </div>
        <div className="column">
          <p class="subhead-text title is-4">
            <a
              href="http://memenomics.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href={gitUrl} target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github" />
            </a>
          </p>
          {description}
        </div>
      </div>
      <br />
    </div>
  );
};

export default SingleProject;
