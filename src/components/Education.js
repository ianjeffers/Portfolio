import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Education() {
  const [show, setShow] = useState(false);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
  });

  const education = {
    institution: "University of California, San Diego",
    expectedGraduation: "March 2023",
    degree: "B.S., Cognitive Science w/ Spec. in Machine Learning & Neural Computation",
    location: "San Diego, CA",
    coursework: ["Object Oriented Programming (C++)", "Applied Data Science (Python)", "Supervised Machine Learning Algorithms (Python)", "Machine Learning II", "Brain Computer Interfaces", "Intro to Computer Programming", "Advanced Computer Programming (Java)", "Client Server Fundamentals (Java)", "Matlab for Engineering"]
  };

  return (
    <div name="education">
      <button onClick={() => setShow(!show)}>{show ? "Hide details" : "Education"}</button>
      {show && (
        <animated.div style={props}>
          <h2>{education.institution}</h2>
          <p>{education.location}</p>
          <p>Expected Graduation: {education.expectedGraduation}</p>
          <p>{education.degree}</p>
          <h3>Relevant Coursework:</h3>
          <ul>
            {education.coursework.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </animated.div>
      )}
    </div>
  );
}

export default Education;
