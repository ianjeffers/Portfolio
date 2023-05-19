// Projects.js
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Projects() {
  const [show, setShow] = useState(false);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
  });
  const projects = [
    {
      title: "HealthMS",
      description: "MHacks 15 'Best Medical Hack' Award Winner. In order to address the ambiguous nature of Multiple Sclerosis and its symptoms, HealthMS parses medical data from user speech, sorts and records it with pertinent notes, as well as provides a suite for viewing correlations accross the data. Composed of Javascript/React frontend, Python/Flask backend, a MongoDB Database, Auth0, and deployed on Azure and Github Pages.",
    },
    {
      title: "Project Nebula",
      description: "Distributed, gig-based E-Waste collection platform. Contains React Native frontend, a Dockerized Django backend, Auth0, and deployed on a Kubernetes cluster with Google Cloud.",
    },
    {
      title: "ChatGPT Github Contexts Plugin",
      description: "ChatGPT plugin for interfacing and connecting with Github Repositories. Features OAuth2 user authentication with Github, Quart backend to OpenAPI specifications, a Redis DB for session management, and a Pinecone vector DB for long term code storage.",
    },
  ];

  return (
    <div name="projects">
      <button onClick={() => setShow(!show)}>Projects</button>
      {show && projects.map((project, index) => (
        <animated.div style={props} key={index}>
          <div className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </animated.div>
      ))}
    </div>
  );
}

export default Projects;
