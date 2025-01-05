import React, { useState, useEffect } from 'react';
import styles from './index.module.css'; // Import CSS file for styling

const Footer = () => {
  const [footerData, setFooterData] = useState([]);

  // Fetching data from footer.json
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("/data/footer.json");
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              const data = await response.json();
              setFooterData(data);
          } catch (error) {
              console.error("Fetch error:", error); // Handle errors
          }
      };
      fetchData();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-columns']}>
        {footerData.map((column) => (
          <div key={column.col_number} className={styles['footer-column']}>
            {column.col_values.map((item, index) => (
              <a href="#" key={index} className={styles['footer-link']}>
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
