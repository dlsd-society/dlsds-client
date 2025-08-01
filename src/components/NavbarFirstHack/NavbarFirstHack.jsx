import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const NavbarFirstHack = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on window resize if it's large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1369) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>

      {/* Hamburger Icon for Mobile/Tablet */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Desktop Navbar */}
      <ul className="navbar-links">
        <li>
          <a href="/firsthack">Home</a>
        </li>
        {/* <li>
          <a href="/firsthack/courses">COURSES</a>
        </li> */}
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="/firsthack/internships-and-training">INTERNSHIP</a>
        </li>
        <li>
          <a href="/firsthack/hackathons">HACKATHONS</a>
        </li>
        {/* <li>
          <a href="#">Job Board</a>
        </li>
        <li>
          <a href="#">CodeBuild</a>
        </li> */}
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="/firsthack">Home</a>
            </li>
            {/* <li>
              <a href="/firsthack/courses">COURSES</a>
            </li> */}
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="/firsthack/internships-and-training">INTERNSHIP</a>
            </li>
            <li>
              <a href="/firsthack/hackathons">HACKATHONS</a>
            </li>
            {/* <li>
              <a href="#">Job Board</a>
            </li>
            <li>
              <a href="#">CodeBuild</a>
            </li> */}
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarFirstHack;
