// Navbar.jsx
import React, { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
// Import the JSON file
import styles from "./index.module.css";

const Navbar = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch("/data/navBar.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setNavData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <header className={styles['navbar-header']}>
      <div className="container">
        <div className={styles['navbar-container']}>
          <h1 className={styles['navbar-title']}><a href="/">Booking Website</a></h1>
          <div className={styles['navbar-buttons']}>
            <button className={styles['navbar-button']}>Register</button>
            <button className={styles['navbar-button']}>Login</button>
          </div>
        </div>
        <nav aria-label="Main Navigation">
          <ul className={styles['navbar-menu']}>
            {navData.map((item, index) => (
              <NavBarItem
                key={index}
                type={item.type}
                icon={item.icon}
                active={item.active}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
