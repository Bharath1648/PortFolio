import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from './pageTransition'; // Import the reusable transition
import { Link } from "react-router-dom";
import './Header.css'; // For navbar styles
import './About.css';  // For About section styles

const About = () => {
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

      {/* About Section */}
      <motion.section
        className="about-section"
        id="about"
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <div className="about-container">
          <div className="about-content">
            <div className="about-text-container">
              <h2 className="about-title">About Me</h2>

              <p className="about-text">
                I'm <span className="highlight">Bharathkumar</span>, a 
                <span className="highlight"> Bachelor of Engineering</span> graduate in 
                Information Technology. I am a highly motivated and dedicated individual with a strong passion 
                for learning and exploring emerging technologies.
              </p>

              <p className="about-text">
                Over time, I have gained hands-on experience in diverse domains, including 
                <span className="highlight"> Machine Learning</span>, 
                <span className="highlight"> Natural Language Processing</span>, 
                <span className="highlight"> Artificial Intelligence</span>, 
                <span className="highlight"> Generative AI</span>, and 
                <span className="highlight"> Web Development</span>.
              </p>

              <p className="about-text">
                I am eager to leverage my skills and knowledge to contribute to innovative projects, collaborate 
                with forward-thinking teams, and continuously grow in the ever-evolving world of technology.
              </p>
            </div>

            <div className="profile-image-container">
              <img 
                src="/Assets/Profile.jpg" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
