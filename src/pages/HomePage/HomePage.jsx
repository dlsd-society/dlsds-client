import React from "react";
import SpotlightSection from "../../components/SpotlightSection/SpotlightSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import StoriesSection from "../../components/StoriesSection/StoriesSection";
import DonateSection from "../../components/DonateSection/DonateSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SpotlightSection />
      {/* <StoriesSection /> */}
      <DonateSection />      
    </>
  );
};

export default HomePage;
