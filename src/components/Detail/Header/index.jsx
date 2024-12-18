import React from "react";
import styles from "./Header.module.css";
import Button from "../../common/Button";

function Header({ name, address, distance, price }) {
  return (
    <header className={styles.header}>
        <div className="left">
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.address}>{address}</p>
            <p className={styles.distance}>{distance}</p>
            <p className={styles.price}>{price}</p>
        </div>
        <Button text="Reserve or Book Now!" type="submit"  className="primary" />
    </header>
);
}

export default Header;
