import React from "react";
import Navbar from "../../components/common/Navbar";
import Header from "../../components/Home/HomeHeader";
import CityList from "../../components/Home/CityList";
import PropertyList from "../../components/Home/PropertyList";
import HotelList from "../../components/Home/HotelList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CityList />
      <PropertyList />
      <HotelList />
    </>
  );
};

export default Home;
