import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactBar from "./components/ContactBar/ContactBar";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <>
      <ContactBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
