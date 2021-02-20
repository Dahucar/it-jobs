import React from "react";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-md">
        <Link  className="navbar-brand" to="/">
          IT JOBS
        </Link>
      </div>
    </nav>
  );
};
