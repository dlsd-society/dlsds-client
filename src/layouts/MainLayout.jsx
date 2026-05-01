// src/layouts/MainLayout.jsx
import React from "react";
import ContactBar from "../components/ContactBar/ContactBar";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/FooterSection/FooterSection";

const MainLayout = ({ children }) => {
  return (
    <>
      <ContactBar />
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
};

export default MainLayout;
