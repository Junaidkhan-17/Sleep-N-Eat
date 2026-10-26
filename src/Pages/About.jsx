import React from "react";

import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import SpecialOffer from "../components/About/SpecialOffer";
import PopularRooms from "../components/Home/PopularRooms";
//import PerfectStay from "../components/About/PerfectStay";
import FacilitiesSection from "../components/About/FacilitiesSection";
import Testimonial from "../components/Home/Testimonial";

const About = () => {
  return (
    <main className="about-page">

      {/*         <PerfectStay />================= HERO ================= */}
        <AboutHero />
        <AboutIntro />
        <SpecialOffer />
        <PopularRooms />
        <FacilitiesSection />
        <Testimonial />

    </main>
  );
};

export default About;