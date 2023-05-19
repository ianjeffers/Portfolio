// Skills.js
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Skills() {
  const [show, setShow] = useState(false);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
  });

  return (
    <div name="skills">
      <button onClick={() => setShow(!show)}>{show ? "Hide details" : "Skills"}</button>
      {show && (
        <animated.div style={props}>
          <h2>Languages</h2>
          <p>Python, Java, Kotlin, JavaScript, TypeScript, HTML/CSS, SQL, Lua, Matlab, C++</p>

          <h2>Tools/Frameworks</h2>
          <p>AWS, Azure, Tensorflow, Keras, PyTorch, Flask, Django, Quart, Bootstrap, Numpy, Pandas, Mockito, React, Express, Node, NextJS, LaTeX, Git, Bootstrap, Lambda, SQS, Sagemaker, Photoshop, Unity, S3, Cloudwatch, DynamoDB, MongoDB, Redis, PostgreSQL, ChatGPT Plugins, Docker, Kubernetes</p>
        </animated.div>
      )}
    </div>
  );
}

export default Skills;
