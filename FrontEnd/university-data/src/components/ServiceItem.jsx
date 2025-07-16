import React from "react";
import "./ServiceItem.css";

function ServiceItem({ title, description }) {
  return (
    <div className="service-item">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;