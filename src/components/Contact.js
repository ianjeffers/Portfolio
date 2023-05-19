import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'; 

import './Contact.css'; 

function Contact() {
  const [isRevealed, setIsRevealed] = useState(false);

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div name="contact" className="contact-container">
        <animated.div style={props}>
          <h1 className="contact-title">Contact Details</h1>
          <p className="contact-text">
            <FiLinkedin /> <a href="https://www.linkedin.com/in/ian-jeffers-847588193" target="_blank">in/ian-jeffers-847588193</a>
            <br/>
            <FiMail /> <a href="mailto:IanJeffersEmailPlaceholder@gmail.com" target="_blank">IanJeffersEmailPlaceholder@gmail.com</a>
            <br/>
            <FiGithub /> <a href="https://github.com/ianjeffers" target="_blank" rel="noopener noreferrer">ianjeffers</a>
          </p>
        </animated.div>
    </div>
  );
}

export default Contact;
