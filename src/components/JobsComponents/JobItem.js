import React from "react";
import { Link } from "react-router-dom";
import "./job.css";

export const JobItem = ({ 
  company, location, title, type, urlJob
}) => {
  return (
    <div className="courses-container">
      <div className="job">
        <div className="job-preview">
        </div>
        <div className="job-info">
          <h2>{title}</h2>
          <h6>
            {company} | {type} | {location}
          </h6>
          <Link className="job-btn" to={{ pathname: urlJob }} target="_blank">
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};
