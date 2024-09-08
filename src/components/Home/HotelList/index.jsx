import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import "./index.css"; // Đảm bảo bạn có file CSS cho CityList

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch dữ liệu từ file JSON trong thư mục public/data
    fetch("/data/hotel_list.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setHotels(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <section className="hotel-sec">
      <div className="container">
        <div className="hotel-list">
          <h2>Homes guests love</h2>
          <div className="hotel-cards">
            {hotels.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelList;
