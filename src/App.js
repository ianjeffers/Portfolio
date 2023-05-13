import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useSpring, animated } from 'react-spring';
import Home from './components/Home';
import About from './components/About';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Animation properties
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0.5 } });

  return (
    <animated.div style={props}>
      <nav>
        <ul>
          <li><ScrollLink to="home" smooth={true}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true}>About</ScrollLink></li>
        </ul>
      </nav>
      <div>
      <Home />
      <About />
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      </div>
    </animated.div>
  );
}

export default App;