import React, { useEffect, useState } from "react";
import "./NoContent.css";

const NoContent = ({
  message = "Network error. Please try again later.",
  delay = 10000, // 10 seconds
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="no-content">
      {isLoading ? (
        <>
          <div className="spinner" />
          <p className="loading-text">Fetching information...</p>
        </>
      ) : (
        <>
          <h2>Oops!</h2>
          <p>{message}</p>
        </>
      )}
    </div>
  );
};

export default NoContent;

