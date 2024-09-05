import React from "react";
import "./PropertyItem.css"; // Đảm bảo bạn có file CSS cho PropertyItem

const PropertyItem = ({ name, count, image }) => {
  return (
    <div className="property-item">
      <figure>
        <img src={image} alt={name} className="property-image" />
      </figure>
      <div className="property-info">
        <h3>{name}</h3>
        <p>{count} properties</p>
      </div>
    </div>
  );
};

export default PropertyItem;
