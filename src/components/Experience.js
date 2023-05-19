// Experience.js
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Experience() {
  const [show, setShow] = useState(false);
  const experiences = [
    {
      title: "Amazon Web Services",
      date: "June 2022 – Sept. 2022",
      description: "Software Development Engineer Intern in Arlington, VA. Created Build Shadowing tool as part of Build Fleets team using the AWS CDK, Java, and Typescript to process live data generated from over 100,000 daily build requests. Created integration tests, project pipeline, alarms, documentation, dashboards, and runbooks. Trained in AWS technologies such as Lambda, SQS, S3, Cloudwatch, as well as test-driven development with tools like JUnit and Mockito. Trained on Secure Design Principles, Accessibility Design, and Deployment Pipelines, and more.",
    },
    {
      title: "PairAnything",
      date: "Oct. 2021 – Apr. 2022",
      description: "Software Data Engineer Intern (Remote). Led intern development team to create new REST API using Node and Express. Created data processing API with Python/Flask. Led weekly standups and hosted meetings with international development team. Trained in/on Javascript, React, Node, Express, Jira, Git, Selenium, BeautifulSoup, Restful APIs, the CI/CD Pipeline, and Agile Methodologies.",
    },
    {
      title: "ObjectSecurity",
      date: "Aug. 2021 – Oct. 2021",
      description: "Software Engineering Intern in San Diego, CA. Implemented machine learning model and backend APIs in Python/Flask to process audio data and create transcripts offline with Tensorflow and Mozilla DeepSpeech. Trained in Flask, Bootstrap, HTML/CSS, and Javascript.",
    },
  ];
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
  });
  
  return (
    <div name="experience">
      <button onClick={() => setShow(!show)}>{show ? "Hide details" : "Experience"}</button>
      {show && experiences.map((experience, index) => (
        <animated.div key={index} style={props} className="experience-card">
          <h2>{experience.title}</h2>
          <p>{experience.date}</p>
          <p>{experience.description}</p>
        </animated.div>
      ))}
    </div>
  );
}

export default Experience;
