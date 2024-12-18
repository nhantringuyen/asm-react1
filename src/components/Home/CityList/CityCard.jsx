import React from "react";
import PropTypes from "prop-types";
import styles from "./CityCard.module.css"; // Tạo file CSS riêng cho component này

const CityCard = ({ name, subText, image }) => {
  return (
    <div className={`${styles['city-card']}`}>
      <figure>
        <img src={image} alt={`${name} view`} className={`${styles['city-card-image']}`} />
      </figure>
      <div className={`${styles['city-card-content']}`}>
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
