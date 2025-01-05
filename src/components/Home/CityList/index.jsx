import React, { useEffect, useState } from "react";
import CityCard from "./CityCard"; // Đảm bảo bạn import đúng đường dẫn của CityCard
import styles from "./index.module.css"; // Đảm bảo bạn có file CSS cho CityList

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch dữ liệu từ file JSON trong thư mục public/data
      const fetchData = async () => {
          try {
              const response = await fetch("/data/city.json");
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              const data = await response.json();
              setCities(data);
          } catch (error) {
              console.error("Fetch error:", error); // Handle errors
          }
      };
      fetchData();
  }, []);

  return (
    <section className={`${styles['city-sec']}`}>
      <div className="container">
        <div className={`${styles['city-list']}`}>
          {cities.map((city, index) => (
            <CityCard
              key={index}
              name={city.name}
              subText={city.subText}
              image={city.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityList;
