// About.js
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Contact from './Contact'; // Importing the Contact component
import './About.css'; 

function About() {
  const [stage, setStage] = useState(0);

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: stage > 0 ? 1 : 0 },
  });

  return (
    <div name="about" className="about-container">
      {stage === 0 && (
        <button className="reveal-button" onClick={() => setStage(1)}>
          Want to know more?
        </button>
      )}

      {stage >= 1 && (
        <animated.div style={props}>
          <h1 className="about-title">About Me</h1>
          <p className="about-text">I am a recent graduate from University of California, San Diego, with a B.S. in Cognitive Science, specializing in Machine Learning & Neural Computation. I have interned at several companies including Amazon Web Services, where I created a Build Shadowing tool as part of the Build Fleets team, and at PairAnything, where I led an intern development team to create a new REST API.</p>
          {stage === 1 && (
            <button className="reveal-button" onClick={() => setStage(2)}>
              Contact Me
            </button>
          )}
        </animated.div>
      )}

      {stage === 2 && <Contact />} 
    </div>
  );
}

export default About;
