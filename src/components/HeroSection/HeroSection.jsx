// import "./HeroSection.css";
// import logo from '../../assets/logo.png';
// import BookSessionModal from "../BookSessionModal/BookSessionModal";
// import { useState } from "react";

// const HeroSection = () => {

//   const [showModal, setShowModal] = useState(false);

//   return (
//     <section id="hero" className="hero">
//       <div className="hero-container">
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1>Empowering today for</h1>           
//             <h1>a better tomorrow.</h1>
//             <h1>Bridging Skills, Building Futures.</h1>
//             <div className="hero-buttons">
//               <button onClick={() => setShowModal(true)}>Book A Free Session</button>
//                 <BookSessionModal
//                   isOpen={showModal}
//                   onClose={() => setShowModal(false)}
//                 />
//             </div>
//           </div>

//           <div className="hero-image">
//             <img
//               src={logo}
//               alt="Digital skills illustration"
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
import logo from "../../assets/logo.png";

const HeroSection = ({ onBookSession }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Empowering today for</h1>
            <h1>a better tomorrow.</h1>
            <h1>Bridging Skills, Building Futures.</h1>

            <div className="hero-buttons">
              <button onClick={onBookSession}>
                Book A Free Session
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img src={logo} alt="Digital skills illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
