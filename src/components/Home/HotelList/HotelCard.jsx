import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import styles from "./HotelCard.module.css";
const HotelCard = ({ hotel }) => {
  return (
    <div className={styles["hotel-card"]}>
      <Link to="/detail" className={styles["thumb"]}>
        <img src={hotel.image_url} alt={hotel.name} className={styles["hotel-image"]} />
      </Link>
        <div className={styles["hotel-desc"]}>
            <h3><Link to="/detail" className={styles["hotel-name"]}>
                {hotel.name}
            </Link></h3>
            <p className={styles["hotel-city"]}>{hotel.city}</p>
            <p className={styles["hotel-price"]}>Starting from ${hotel.price}</p>
            <div className={styles["hotel-rating"]}>
                <span className={styles["rating-score"]}>{hotel.rate}</span>
                <span className={styles["rating-type"]}>{hotel.type}</span>
            </div>
        </div>
    </div>
  );
};

export default HotelCard;
