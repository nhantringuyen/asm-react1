// Navbar.jsx
import React, { useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";
// Import the JSON file
import "./index.css";

const Navbar = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch("/data/navBar.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setNavData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <header className="navbar-header">
      <div className="container">
        <div className="navbar-container">
          <h1 className="navbar-title">Booking Website</h1>
          <div className="navbar-buttons">
            <button className="navbar-button">Register</button>
            <button className="navbar-button">Login</button>
          </div>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="navbar-menu">
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
