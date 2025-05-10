import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import { pageTransition } from './pageTransition'; // Import reusable transition
import { Link } from "react-router-dom"; // For navbar links
import './Header.css'; // Navbar styles
import './Contact.css'; // Contact page styles
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
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

      {/* Contact Section */}
      <motion.section
        className="contact-section"
        id="contact"
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <div className="contact-container">
          <h2 className="contact-heading">Get In Touch</h2>
          <p className="contact-description">
            I’m always open to opportunities, collaboration, or just a chat. You can reach me through the platforms below.
          </p>

          <div className="contact-info">

            {/* Phone */}
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <strong>Phone:</strong>
              <a href="tel:+916281906017">+91 62819 06017</a>
            </div>

            {/* Email */}
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <strong>Email:</strong>
              <a href="mailto:marupakabharathkumar1648@gmail.com?subject=Hello Bharathkumar&body=I would like to get in touch with you.">
                marupakabharathkumar1648@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/marupaka-bharathkumar-216b53257" target="_blank" rel="noreferrer">
                linkedin.com/in/marupaka-bharathkumar-216b53257
              </a>
            </div>

            {/* GitHub */}
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <strong>GitHub:</strong>
              <a href="https://github.com/Bharath1648" target="_blank" rel="noreferrer">
                github.com/Bharath1648
              </a>
            </div>

            {/* Instagram */}
            <div className="contact-item">
              <FaInstagram className="contact-icon" />
              <strong>Instagram:</strong>
              <a href="https://instagram.com/bharath_1_6_4_8" target="_blank" rel="noreferrer">
                @bharath_1_6_4_8
              </a>
            </div>

          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
