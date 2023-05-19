import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import About from './About';
import './Introduction.css'; 

function Introduction() {
  const [step, setStep] = useState(0);


  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
    to: { opacity: step > 0 ? 1 : 0, transform: step > 0 ? 'translate3d(0,0px,0)' : 'translate3d(0,-30px,0)' },
  });

  return (
    <div className="intro-container">
      <h1 className="intro-title">Hello, I'm Ian Jeffers</h1>
      <p>Software Engineer specialized in web development and machine learning.</p>
      <About/>
    </div>
  );
}

export default Introduction;
