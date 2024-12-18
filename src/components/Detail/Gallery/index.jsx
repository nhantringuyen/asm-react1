import React from "react";
import styles from "./Gallery.module.css";

function Gallery({ photos }) {
  return (
    <div className={styles.gallery}>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Hotel view ${index + 1}`}
          className={styles.image}
        />
      ))}
    </div>
  );
}

export default Gallery;
