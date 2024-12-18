import React from "react";
import styles from "./PropertyItem.module.css"; // Đảm bảo bạn có file CSS cho PropertyItem

const PropertyItem = ({ name, count, image }) => {
  return (
    <div className={styles["property-item"]}>
      <figure>
        <img src={image} alt={name} className={styles["property-image"]} />
      </figure>
      <div className={styles["property-info"]}>
        <h3>{name}</h3>
        <p>{count} properties</p>
      </div>
    </div>
  );
};

export default PropertyItem;
