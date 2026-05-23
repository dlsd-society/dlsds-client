// import React from "react";
// import SpotlightSection from "../../components/SpotlightSection/SpotlightSection";
// import HeroSection from "../../components/HeroSection/HeroSection";
// import StoriesSection from "../../components/StoriesSection/StoriesSection";
// import DonateSection from "../../components/DonateSection/DonateSection";

// const HomePage = () => {
//   return (
//     <>
//       <HeroSection />
//       <SpotlightSection />
//       {/* <StoriesSection /> */}
//       <DonateSection />      
//     </>
//   );
// };

// export default HomePage;



import React, { useState } from "react";
import styled from "styled-components";
import SpotlightSection from "../../components/SpotlightSection/SpotlightSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import DonateSection from "../../components/DonateSection/DonateSection";
import BookSessionModal from "../../components/BookSessionModal/BookSessionModal";

const GeneralButton = styled.a`
  display: inline-block;
  margin-top: 16px;
  margin-right: 12px;
  background-color: #005a9c;
  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #00477a;
  }`

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HeroSection onBookSession={() => setShowModal(true)} />
      <SpotlightSection />
      <DonateSection />

      <BookSessionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />      
    </>
  );
};

export default HomePage;
