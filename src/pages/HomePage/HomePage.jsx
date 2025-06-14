import React from "react";
import SpotlightSection from "../../components/SpotlightSection/SpotlightSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import StoriesSection from "../../components/StoriesSection/StoriesSection";
import DonateSection from "../../components/DonateSection/DonateSection";
import FooterSection from "../../components/FooterSection/FooterSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SpotlightSection />
      <StoriesSection />
      <DonateSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
