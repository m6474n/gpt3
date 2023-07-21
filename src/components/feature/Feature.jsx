import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__feature-container_feature">
      <div className="gpt3__feature-conteiner_feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__feature-container_feature-text">{text}</div>
    </div>
  );
};

export default Feature;
