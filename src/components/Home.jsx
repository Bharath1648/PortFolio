import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from './pageTransition'; // Import the reusable transition
import { Link } from "react-router-dom";
import './Header.css'; // Header styles
import './Home.css';   // Home styles

const Home = () => {
  const handleHireMeClick = () => {
    window.location.href = 'mailto:marupakabharathkumar1648@gmail.com?subject=Hiring Inquiry&body=Hi Bharath, I’d like to connect with you regarding a job opportunity.';
  };

  return (
    <>
      {/* Header Section */}
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

      {/* Home Section */}
      <motion.div
        className="home-section"
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">Hello I'm Bharath Marupaka!</h1>
            <h2 className="home-subtitle animated-title">IT Graduate</h2>
            <p className="home-description">
              I completed a Bachelor of Engineering in the Information Technology department. 
              I am a highly motivated individual with a strong desire to learn and explore new technologies. 
              I have gained experience in various domains, including machine learning, natural language processing, 
              artificial intelligence, generative AI, and web development.
            </p>

            <div className="home-buttons">
              <button className="btn" onClick={handleHireMeClick}>Hire Me</button>
              <a
                href="https://drive.google.com/file/d/1mJxlFZu231IHGAmieymSMXXHfel3GIRV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="home-image">
            <img
              src="/Assets/Profile.jpg"
              alt="Profile"
              className="profile-image"
            />
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
