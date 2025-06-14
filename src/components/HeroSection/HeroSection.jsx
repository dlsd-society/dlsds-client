// import React from 'react';
// import heroImage from '../../assets/hero.jpg'; // Your uploaded image

// const HeroSection = () => {
//   return (
//     <div style={{ position: 'relative' }}>
//       <img src={heroImage} alt="Hero" style={{ width: '100%' }} />
//       <div style={{
//         position: 'absolute',
//         top: '40%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         color: 'white',
//         textAlign: 'center',
//         fontSize: '2rem',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         padding: '1rem',
//         borderRadius: '10px'
//       }}>
//         <p>More than <strong style={{ color: 'yellow' }}>200000</strong> beneficiaries in last 5 years</p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Empowering Through Education</h1>
        <p>Transforming lives by making quality education accessible to all.</p>
        <div className="hero-buttons">
          <button>Join Us</button>
          <button>Our Programs</button>
          <button>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
