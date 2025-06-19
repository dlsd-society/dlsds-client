import React from "react";
import "./NoContent.css";

const NoContent = ({ message = "Could not load content for this page. Please try again later." }) => {
  return (
    <div className="no-content">
      <h2>Oops!</h2>
      <p>{message}</p>
    </div>
  );
};

export default NoContent;
