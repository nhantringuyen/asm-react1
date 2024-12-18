import React from "react";
import styles from "./Description.module.css";

function Description({ title, description }) {
  return (
    <div className={styles.descriptionSection}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Description;
