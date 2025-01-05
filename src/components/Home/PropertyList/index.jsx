import React, { useEffect, useState } from "react";
import PropertyItem from "./PropertyItem"; // Import PropertyItem
import styles from "./index.module.css";

const PropertyList = () => {
  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("/data/type.json");
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              const data = await response.json();
              setPropertyTypes(data);
          } catch (error) {
              console.error("Fetch error:", error); // Handle errors
          }
      };
      fetchData();
  }, []);

  return (
      <section className={styles["property-sec"]}>
        <div className="container">
          <h2 className={styles["sec-title"]}>Browse by property type</h2>
          <div className={styles["property-list"]}>
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
      </section>
  );
};

export default PropertyList;
