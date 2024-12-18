import React from "react";
import styles from "./Pricing.module.css";
import Button from "../../common/Button";

function Pricing({ price }) {
  return (
    <div className={styles.pricing}>
      <h3>Perfect for a 9-night stay!</h3>
      <p>
        Located in the real heart of Krakow, this property has an excellent
        location score!
      </p>
      <div className={styles.priceBox}>
        <p className={styles.price}>${price} <span>(9 nights)</span></p>
          <Button text="Reserve or Book Now!" type="button"  className="primary" />
      </div>
    </div>
  );
}

export default Pricing;
