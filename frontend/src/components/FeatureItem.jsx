import React from "react";

export default function FeatureItem({ image, title, description }) {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={image} alt="" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
