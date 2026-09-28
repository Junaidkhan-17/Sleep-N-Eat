import React from "react";

import RoomsHero from "../components/Rooms/RoomsHero";
import RoomsPopularRoom from "../components/Rooms/RoomsPopularRoom";
import FacilitiesSection from "../components/About/FacilitiesSection";
import Restaurant from "../components/Home/Restaurant";
import SubscribeSection from "../components/Home/SubscribeSection";


const Rooms = () => {
  return (
    <main className="rooms-page">

      {/* ================= HERO ================= */}
      <RoomsHero />

      {/* ================= POPULAR ROOMS ================= */}
      <RoomsPopularRoom />

      {/* ================= PROMOTIONAL OFFER ================= */}
      <FacilitiesSection />

      {/* ================= HOTEL STATISTICS ================= */}
      <Restaurant />

      {/* ================= HOTEL SERVICES ================= */}
      <SubscribeSection />

    </main>
  );
};

export default Rooms;