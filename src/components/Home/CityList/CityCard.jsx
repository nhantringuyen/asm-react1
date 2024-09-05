import React from "react";
import PropTypes from "prop-types";
import "./CityCard.css"; // Tạo file CSS riêng cho component này

const CityCard = ({ name, subText, image }) => {
  return (
    <div className="city-card">
      <figure>
        <img src={image} alt={`${name} view`} className="city-card-image" />
      </figure>
      <div className="city-card-content">
        <h3>{name}</h3>
        <p>{subText}</p>
      </div>
    </div>
  );
};

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CityCard;
