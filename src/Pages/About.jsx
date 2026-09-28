import React from "react";

import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import SpecialOffer from "../components/About/SpecialOffer";
import PerfectStay from "../components/About/PerfectStay";
import FacilitiesSection from "../components/About/FacilitiesSection";
import Testimonial from "../components/Home/Testimonial";

const About = () => {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
        <AboutHero />
        <AboutIntro />
        <SpecialOffer />
        <PerfectStay />
        <FacilitiesSection />
        <Testimonial />

    </main>
  );
};

export default About;