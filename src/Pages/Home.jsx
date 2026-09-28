import React from "react";

import Hero from "../components/Home/Hero";
import PopularRooms from "../components/Home/PopularRooms";
import ExclusiveOffer from "../components/Home/ExclusiveOffer";
import HotelFeatures from "../components/Home/HotelFeatures";
import HotelFacilities from "../components/Home/HotelFacilities";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Restaurant from "../components/Home/Restaurant";
import Testimonial from "../components/Home/Testimonial";
import LatestNews from "../components/Home/LatestNews";
import SubscribeSection from "../components/Home/SubscribeSection";

const Home = () => {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= POPULAR ROOMS ================= */}
      <PopularRooms />

      {/* ================= PROMOTIONAL OFFER ================= */}
      <ExclusiveOffer />

      {/* ================= HOTEL STATISTICS ================= */}
      <HotelFeatures />

      {/* ================= HOTEL SERVICES ================= */}
      <WhyChooseUs />

      {/* ================= POPULAR VILLAS ================= */}
       <HotelFacilities />

      {/* ================= HOTEL SERVICES ================= */}
      <Restaurant />

      {/* ================= RESTAURANT ================= */}
      <Testimonial />

      {/* ================= LATEST NEWS ================= */}
      <LatestNews />

      {/* ================= NEWSLETTER ================= */}
      <SubscribeSection />

    </main>
  );
};

export default Home;