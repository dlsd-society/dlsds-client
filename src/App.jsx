import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactBar from "./components/ContactBar/ContactBar";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <ContactBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
