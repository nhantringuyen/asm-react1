import React, { useEffect, useState } from "react";
import CityCard from "./CityCard"; // Đảm bảo bạn import đúng đường dẫn của CityCard
import "./index.css"; // Đảm bảo bạn có file CSS cho CityList

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch dữ liệu từ file JSON trong thư mục public/data
    fetch("/data/city.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="container">
      <div className="city-list">
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
  );
};

export default CityList;
