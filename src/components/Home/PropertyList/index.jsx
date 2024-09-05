import React, { useEffect, useState } from "react";
import PropertyItem from "./PropertyItem"; // Import PropertyItem
import "./index.css";

const PropertyList = () => {
  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {
    fetch("/data/type.json") // Fetch dữ liệu từ file JSON trong thư mục public/data
      .then((response) => response.json())
      .then((data) => setPropertyTypes(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="container">
      <h2 className="">Browse by property type</h2>
      <div className="property-list">
        {propertyTypes.map((type, index) => (
          <PropertyItem
            key={index}
            name={type.name}
            count={type.count}
            image={type.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
