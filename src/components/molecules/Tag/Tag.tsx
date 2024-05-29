import React from "react";
import "./Tag.css";

const Tag = () => {
  return (
    <div className="tag-container">
      <div className="vertical-text-container">
        <p className="vertical-text">COVERED</p>
      </div>
      <div className="content">
        <div className="yellow-circle">
          <p className="dollar">$</p>
        </div>
        <div style={{ position: "absolute" }}>
          <div className="big-text">
            <p>500k</p>
          </div>
          <div className="small-text">
            <p>$10.99/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
