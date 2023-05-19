import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import healthmsImg from '../images/healthms.png';
import projectNebulaImg from '../images/projectnebula.jpg';
import githubContextsImg from '../images/githubcontexts.png';
import './Projects.css';

function Projects() {
  const [show, setShow] = useState(false);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
  });
  const projects = [
    {
      title: "HealthMS",
      link: "https://health-ms.vercel.app/",
      repo: "https://github.com/ianjeffers/HealthMS",
      previewImage: healthmsImg,
      description: "MHacks 15 'Best Medical Hack' Award Winner. In order to address the ambiguous nature of Multiple Sclerosis and its symptoms, HealthMS parses medical data from user speech, sorts and records it with pertinent notes, as well as provides a suite for viewing correlations accross the data. Composed of Javascript/React frontend, Python/Flask backend, a MongoDB Database, Auth0, and deployed on Azure and Github Pages.",
      skills: "Python, Flask, Javascript, React, MongoDB, Auth0, Azure"
    },
    {
      title: "Project Nebula",
      link: "https://project-nebula.com",
      repo: "https://github.com/ianjeffers/Project-Nebula",
      previewImage: projectNebulaImg,
      description: "Distributed, gig-based E-Waste collection platform. Contains React Native frontend, a Dockerized Django backend, Auth0, and deployed on a Kubernetes cluster with Google Cloud.",
      skills: "React Native, Django, Docker, Auth0, Kubernetes, Google Cloud"
    },
    {
      title: "ChatGPT Github Contexts Plugin",
      link: "https://chatgpt-github-insights.vercel.app/",
      repo: "https://github.com/ianjeffers/ChatGPT-Github-Insights/",
      previewImage: githubContextsImg,
      description: "ChatGPT plugin for interfacing and connecting with Github Repositories. Features OAuth2 user authentication with Github, Quart backend to OpenAPI specifications, a Redis DB for session management, and a Pinecone vector DB for long term code storage.",
      skills: "OAuth2, Github, Quart, Redis, Pinecone"
    },
  ];
  

  return (
    <div name="projects">
      <button onClick={() => setShow(!show)}>Projects</button>
      {show && projects.map((project, index) => (
        <animated.div style={props} key={index}>
        <div className="project-card">
          <img src={project.previewImage} alt={project.title + " preview"} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Skills Used: {project.skills}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">Github Repository</a>
        </div>
      </animated.div>
      
      ))}
    </div>
  );
}

export default Projects;
