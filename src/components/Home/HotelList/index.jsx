import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import styles from "./index.module.css";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch dữ liệu từ file JSON trong thư mục public/data
      const fetchData = async () => {
          try {
              const response = await fetch("/data/hotel_list.json");
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              const data = await response.json();
              setHotels(data);
          } catch (error) {
              console.error("Fetch error:", error); // Handle errors
          }
      };
      fetchData();
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

