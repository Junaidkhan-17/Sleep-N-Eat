import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Common/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rooms from "./Pages/Rooms";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Footer from "./components/Common/Footer";
import Availability from "./Pages/Availability";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ================= HOME PAGE ================= */}

        <Route path="/" element={<Home />} />

        {/* ================= ABOUT PAGE ================= */}

        <Route path="/about" element={<About />} />

        <Route path="/rooms" element={<Rooms />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/availability" element={<Availability />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
