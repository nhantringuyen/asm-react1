import React, { useState, useEffect } from 'react';
import styles from './index.module.css'; // Import CSS file for styling

const Footer = () => {
  const [footerData, setFooterData] = useState([]);

  // Fetching data from footer.json
  useEffect(() => {
    fetch('/data/footer.json') // Make sure footer.json is placed correctly in the public/data folder
      .then((response) => response.json())
      .then((data) => setFooterData(data))
      .catch((error) => console.error('Error fetching JSON:', error));
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
