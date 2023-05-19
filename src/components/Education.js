import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Education.css';

function Education() {
  const [show, setShow] = useState(false);
  const [csCoursework, setCsCoursework] = useState(true);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
  });

  const non_cs_coursework = ["Sensation and Perception", "Learning, Memory, and Attention", "Systems Neuroscience", "Neuroanatomy and Physiology", "Cognitive Foundations of Math", "Neurobiology of Motivation", "Neurobiology of Cognition", "Galaxies and Cosmology", "Life in the Universe", "German 4", "Graphic Design", "Intro to Research Methods", "Cognition in the Wild", "Cognitive Consequences of Technology"]
  const cs_coursework = ["Object Oriented Programming (C++)", "Data Science in Practice (Python)", "Supervised Machine Learning Algorithms (Python)", "Intro to Machine Learning", "Brain Computer Interfaces", "Intro to Computer Programming", "Advanced Computer Programming (Java)", "Client Server Fundamentals (Java)", "Matlab for Engineering", "Cyborgs Now and in the Future", "Accelerated Intro to Programming", "Introduction to Probability", "Discrete Mathematics", "Vector Calculus", "Calculus & Analytic Geometry", "Differential Equations", "Statistics"]
  
  const education = {
    institution: "University of California, San Diego",
    expectedGraduation: "March 2023",
    degree: "B.S., Cognitive Science w/ Spec. in Machine Learning & Neural Computation",
    location: "San Diego, CA",
  };

  const toggleCoursework = () => setCsCoursework(!csCoursework);

  return (
    <div name="education">
      <button onClick={() => setShow(!show)}>{show ? "Hide details" : "Education"}</button>
      {show && (
        <animated.div style={props}>
          <div className="education-box">
            <h2>{education.institution}</h2>
            <p>{education.location}</p>
            <p>Graduation Date: {education.expectedGraduation}</p>
            <p>{education.degree}</p>
            <button onClick={toggleCoursework}>{csCoursework ? "View Non-CS Coursework" : "View CS Coursework"}</button>
            <div className="coursework">
              <h3>Relevant Coursework:</h3>
              <div className="coursework-grid">
                {(csCoursework ? cs_coursework : non_cs_coursework).map((course, index) => (
                  <div key={index} className="course-box">
                    <p>{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </div>
  );
}

export default Education;
