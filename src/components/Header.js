import React from 'react';
import useScrollDirection from '../hooks/useScrollDirection'; 
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import '../App.css';

const Header = () => {
  const scrollDir = useScrollDirection();

  return (
    <nav style={{ top: scrollDir === 'up' ? '0' : '-60px' }}>
        <ul>
          <li><ScrollLink to="home" smooth={true} style={{ cursor: 'pointer' }}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} style={{ cursor: 'pointer' }}>About</ScrollLink></li>
          <li><ScrollLink to="skills" smooth={true} style={{ cursor: 'pointer' }}>Skills</ScrollLink></li>
          <li><ScrollLink to="experience" smooth={true} style={{ cursor: 'pointer' }}>Experience</ScrollLink></li>
          <li><ScrollLink to="projects" smooth={true} style={{ cursor: 'pointer' }}>Projects</ScrollLink></li>
          <li><ScrollLink to="education" smooth={true} style={{ cursor: 'pointer' }}>Education</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} style={{ cursor: 'pointer' }}>Contact</ScrollLink></li>
        </ul>
      </nav>
  );
};

export default Header;
