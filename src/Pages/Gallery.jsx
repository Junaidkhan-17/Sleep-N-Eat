import React from "react";

import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryExplore from "../components/Gallery/GalleryExplore";
import LatestNews from "../components/Home/LatestNews";



const Gallery = () => {
  return (
    <main className="Gallery-page">

      {/* ================= HERO ================= */}
      <GalleryHero />

      {/* ================= POPULAR ROOMS ================= */}
      <GalleryExplore />

      {/* ================= PROMOTIONAL OFFER ================= */}
      <LatestNews />

    </main>
  );
};

export default Gallery;