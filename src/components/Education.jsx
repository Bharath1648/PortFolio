import React from 'react';
import { motion } from 'framer-motion'; // ✅ Import motion
import { pageTransition } from './pageTransition'; // Import the reusable transition
import { Link } from "react-router-dom"; // For navbar links
import './Header.css'; // Navbar styles
import './Education.css'; // Education styles

const Education = () => {
  return (
    <>
      {/* Header/Navbar */}
      <header className="header-container">
        <nav className="navbar">
          <h1 className="logo">Portfolio</h1>
          <ul className="nav-links">
            <li><Link to="/home" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/education" className="nav-link">Education</Link></li>
            <li><Link to="/skills" className="nav-link">Skills</Link></li>
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Education Section */}
      <motion.div
        className="education-section"
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <h2 className="education-title">My Education</h2>

        <div className="education-entry">
          <h3 className="education-year">2021 - 2025</h3>
          <p className="education-institute">MVSREC - Maturi Venkata Subba Rao Engineering College</p>
          <p className="education-location">Nadergul, Hyderabad</p>
        </div>

        <div className="education-entry">
          <h3 className="education-year">2019 - 2021</h3>
          <p className="education-institute">Narayana Junior College</p>
          <p className="education-location">Ghatkesar, Hyderabad</p>
        </div>

        <div className="education-entry">
          <h3 className="education-year">2017 - 2019</h3>
          <p className="education-institute">Orbit e Techno School</p>
          <p className="education-location">HanamKonda, Telangana</p>
        </div>
      </motion.div>
    </>
  );
};

export default Education;
