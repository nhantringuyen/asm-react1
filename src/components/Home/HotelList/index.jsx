import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import styles from "./index.module.css";

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
    <section className={styles["hotel-sec"]}>
      <div className="container">
        <h2 className={styles["sec-title"]}>Homes guests love</h2>
        <div className={styles["hotel-cards"]}>
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelList;

