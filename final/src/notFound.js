import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1 className="has-text-centered is-size-1">
        Sorry , we don't have that page now
      </h1>

      <div className="columns">
        <div className="column"></div>
        <div className="column is-two-thirds">
          <p className="has-text-centered">
            <Link to="/">Back to main page</Link>
          </p>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default NotFound;
