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
import styled from "styled-components";

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
              {/* <button onClick={onBookSession}>
                Book A Free Session
              </button> */}

              <GeneralButton
                href="https://forms.gle/nPNeRtxYXtF19xNi7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book A Session
              </GeneralButton>  
              
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
