import React from 'react';
import heroImage from '../assets/hero.jpg'; // Your uploaded image

const HeroSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={heroImage} alt="Hero" style={{ width: '100%' }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '1rem',
        borderRadius: '10px'
      }}>
        <p>More than <strong style={{ color: 'yellow' }}>200000</strong> beneficiaries in last 5 years</p>
      </div>
    </div>
  );
};

export default HeroSection;
