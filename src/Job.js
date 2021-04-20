import React from "react";

const Job = ({ company, jobTitle, dates, summary }) => {
  return (
    <p>
      <h4>{company}</h4>&nbsp;&nbsp;
      <i>{jobTitle}</i>
      &nbsp;&nbsp;•&nbsp;&nbsp;{dates}
      {summary}
    </p>
  );
};

export default Job;
