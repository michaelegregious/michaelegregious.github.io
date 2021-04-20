import React from 'react';
import Job from './Job'

const WorkExperience = () => {
  return (
    <section class="section hero is-primary has-text-dark">
      <div className="container content">
        <h3 class="subhead-text">Work Experience</h3>
        <Job company="GreenKey Technologies (GK)" jobTitle="Software Engineer" dates="Dec, 2018 — Feb, 2021" summary={
          <ul>
          <li>
            Collaborated on a small, agile team to design and build full stack
            applications utilizing modern Typescript, React, Node/Express, GoLang,
            PostgreSQL, MongoDB, Docker, Redis.
          </li>
          <li>
            Built, scrapped, and built again three iterations of GK's ultimately successful
            Focus UI suite, improving customer satisfaction, UX, and data
            model-training feedback dramatically.
          </li>
          <li>
            Owned test coverage improvements. Achieved up to 95 percent throughout
            applications.
          </li>
          <li>
            Coordinated with the entire GK team (from Data Science to Engineering
            and Customer Success) to iterate on rapidly-evolving needs of high
            profile customers (incl. six Fortune 500 companies and five top tier
            banks).
          </li>
          <li>
            Researched and contributed meaningfully to story-driven UX processes,
            incorporating real time SME feedback.
          </li>
          <li>
            Spearheaded meaningful architectural restructuring dialog to ensure
            scalability, readability and extensibility of codebases.
          </li>
        </ul>
        }/>
      </div>
    </section>
  );
};

export default WorkExperience