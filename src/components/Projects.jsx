import React from 'react';
import { motion } from 'framer-motion'; // ✅ Import motion
import { pageTransition } from './pageTransition'; // Import the reusable transition
import { Link } from "react-router-dom"; // For navbar links
import './Header.css'; // Navbar styles
import './Projects.css'; // Projects styles

const Projects = () => {
  const projectList = [
    {
      title: "Emotion-Based Music System",
      description: "Throughout my academic and personal projects, I spearheaded the development of an innovative Emotion-Based Music System designed to revolutionize the music listening experience. Utilizing advanced emotion recognition algorithms, the system dynamically analyzes user input to discern emotional states accurately. Leveraging this data, it intelligently recommends and plays music that resonates with the user's current emotional context. This project not only showcases my proficiency in integrating machine learning with user-centric applications but also underscores my commitment to enhancing human-computer interactions through personalized technology solutions.",
      image: "/Assets/Moodify.jpg"
    },
    {
      title: "Depression.ai",
      description: "Depression.AI is an innovative tool developed to detect depression in users through two distinct approaches: a questionnaire-based assessment and text analysis. By leveraging established psychological evaluation methods along with cutting-edge machine learning techniques, the system delivers accurate and insightful assessments. The tool’s ability to analyze user input and provide meaningful insights demonstrates my dedication to applying artificial intelligence for the improvement of mental health diagnostics, while also emphasizing the potential of technology to support well-being.",
      image: "/Assets/Depression.jpg"
    },
    {
      title: "Personality Prediction System",
      description: "The Personality Prediction System is an innovative tool designed to assess and predict personality traits based on user inputs, such as openness, neuroticism, and gender. By combining user interaction with advanced machine learning techniques, the system provides personalized insights into individual personality profiles. This project highlights my ability to create data-driven applications that utilize AI and machine learning to gain a deeper understanding of human behavior, demonstrating my commitment to leveraging technology for personal development and psychological assessment.",
      image: "/Assets/Personality.jpg"
    },
    {
      title: "Virtual Herbal Garden",
      description: "The Virtual Herbal Garden is an immersive and comprehensive platform that combines 3D visualizations of plants with valuable resources for users. It features a detailed Herbal Prescription section, offering users personalized recommendations for natural remedies, alongside a dynamic Community page for users to engage with one another. Additionally, the platform incorporates an eCommerce website, allowing users to purchase herbal products. This project reflects my ability to integrate interactive 3D technology, eCommerce functionality, and community-driven content, showcasing my skills in web development and user experience design for a holistic and user-centered digital ecosystem.",
      image: "/Assets/VirtualHerbal.jpg"
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

      {/* Projects Section */}
      <motion.div
        className="projects-container"
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <h2>Projects</h2>
        <div className="grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
