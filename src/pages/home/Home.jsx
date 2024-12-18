import React from "react";
import Navbar from "../../components/common/Navbar";
import Header from "../../components/Home/HomeHeader";
import CityList from "../../components/Home/CityList";
import PropertyList from "../../components/Home/PropertyList";
import HotelList from "../../components/Home/HotelList";
import SubscriptionForm from "../../components/Home/SubscriptionForm";
import Footer from "../../components/common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <CityList />
        <PropertyList />
        <HotelList />
        <SubscriptionForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;
