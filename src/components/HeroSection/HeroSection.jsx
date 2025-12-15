// import React, { useState } from "react";
// import "./HeroSection.css";
// import BookSessionModal from "../BookSessionModal/BookSessionModal";

// const HeroSection = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <section className="hero-section">
//       <div className="hero-content">
//         <div className="hero-overlay">
//           <h1 style={{ fontSize: "2rem" }}>
//             Digital Literacy and Skill Development Society
//           </h1>
//           <p style={{ fontSize: "1.5rem" }}>
//             Creating Opportunities Through Skills and Digital Empowerment
//           </p>
//         </div>
//         <div className="hero-buttons">          
//           <button>Our Programs</button>          
//           <div>
//             <button onClick={() => setShowModal(true)}>Book A Free Session</button>
//             <BookSessionModal
//               isOpen={showModal}
//               onClose={() => setShowModal(false)}
//             />
//           </div>
//         </div>

//         {showModal && <BookSessionModal onClose={() => setShowModal(false)} />}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





import "./HeroSection.css";
import logo from '../../assets/logo.png';
import BookSessionModal from "../BookSessionModal/BookSessionModal";
import { useState } from "react";

const HeroSection = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Empowering today for</h1>           
            <h1>a better tomorrow.</h1>
            <h1>Bridging Skills, Building Futures.</h1>
            <div className="hero-buttons">
              <button onClick={() => setShowModal(true)}>Book A Free Session</button>
                <BookSessionModal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                />
            </div>
          </div>

          <div className="hero-image">
            <img
              src={logo}
              alt="Digital skills illustration"
            />
          </div>
        </div>
        {showModal && <BookSessionModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
};

export default HeroSection;
