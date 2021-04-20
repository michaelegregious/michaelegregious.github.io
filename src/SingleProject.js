import React from "react";

const SingleProject = (props) => {
  const { img, name, description, webUrl, gitUrl } = props;
  return (
    <div>
      <div className="columns">
        <div className="column is-5">
          <a href={webUrl}>
            <img
              src={img}
              className="project-image"
              alt="website cover photo"
            />
          </a>
        </div>
        <div className="column">
          <p class="subhead-text title is-4">
            <a href={webUrl} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
            &nbsp;&nbsp;
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="subhead-text"
            >
              <i className="fab fa-github" />
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
