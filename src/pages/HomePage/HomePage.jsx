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
import SpotlightSection from "../../components/SpotlightSection/SpotlightSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import DonateSection from "../../components/DonateSection/DonateSection";
import BookSessionModal from "../../components/BookSessionModal/BookSessionModal";

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
