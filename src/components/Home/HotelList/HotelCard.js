import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image_url} alt={hotel.name} className="hotel-image" />
      <Link to="/detail" className="hotel-name">
        {hotel.name}
      </Link>
      <p className="hotel-city">{hotel.city}</p>
      <p className="hotel-price">Starting from ${hotel.price}</p>
      <div className="hotel-rating">
        <span className="rating-score">{hotel.rate}</span>
        <span className="rating-type">{hotel.type}</span>
      </div>
    </div>
  );
};

export default HotelCard;
