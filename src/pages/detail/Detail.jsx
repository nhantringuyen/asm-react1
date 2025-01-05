import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import SubscriptionForm from "../../components/Home/SubscriptionForm";
import Footer from "../../components/common/Footer";

import HeaderDetail from "../../components/Detail/Header";
import Gallery from "../../components/Detail/Gallery";
import Description from "../../components/Detail/Description";
import Pricing from "../../components/Detail/Pricing";
import styles from "./Detail.module.css";


const Detail = () => {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    // Fetch dữ liệu từ file JSON trong thư mục public/data
    const fetchData = async () => {
      try {
        const response = await fetch("/data/detail.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHotel(data);
      } catch (error) {
        console.error("Fetch error:", error); // Handle errors
      }
    };
    fetchData();
  }, []);

  if (!hotel) {
    return <p>Loading...</p>; // Hiển thị "Loading..." khi dữ liệu đang tải
  }
  return (
    <div className="app">
    <Navbar />
    <main>
      <div className={styles.detail}>
        <HeaderDetail
          name={hotel.name}
          address={hotel.address}
          distance={hotel.distance}
          price={hotel.price}
        />
        <Gallery photos={hotel.photos} />
        <div className={styles.descriptionPricingContainer}>
          <Description title={hotel.title} description={hotel.description} />
          <Pricing price={hotel.nine_night_price} />
        </div>
      </div>
      <SubscriptionForm />
    </main>
    <Footer />
  </div>
  );
};

export default Detail;
