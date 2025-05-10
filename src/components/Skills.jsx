import React from 'react';
import { motion } from 'framer-motion'; // ✅ Import motion
import { pageTransition } from './pageTransition'; // Import the reusable transition
import { Link } from "react-router-dom"; // For navbar links
import './Header.css'; // Navbar styles
import './Skills.css'; // Skills styles

const Skills = () => {
  const skillData = [
    {
      category: 'Frontend Web Development',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 70 },
      ]
    },
    {
      category: 'Backend Web Development',
      skills: [
        { name: 'Django', level: 70 },
        { name: 'REST Framework', level: 60 },
      ]
    },
    {
      category: 'DevOps & Deployment',
      skills: [
        { name: 'DevOps Fundamentals', level: 70 },
      ]
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C', level: 65 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 70 },
      ]
    },
    {
      category: 'Emerging Technologies',
      skills: [
        { name: 'Artificial Intelligence & ML', level: 80 },
        { name: 'Internet of Things (IoT)', level: 70 },
      ]
    }
  ];

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

      {/* Skills Section */}
      <motion.section
        className="skills-section"
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <h2 className="section-title">Technical Proficiencies</h2>

        <div className="skills-grid">
          {skillData.map((group, index) => (
            <div className="skill-card" key={index}>
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.skills.map((skill, idx) => (
                  <li className="skill" key={idx}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-text">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
