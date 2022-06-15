import React, { useEffect, useRef } from "react";

export const ProgressBar = ({ value }) => {
  const barRef = useRef();

  useEffect(() => {
    barRef.current.style.width = `${value}%`;
  }, []);

  return (
    <div className="progress-bar">
      <div
        ref={barRef}
        className={`inner ${value < 50 ? "success" : "danger"}`}
      ></div>
    </div>
  );
};
