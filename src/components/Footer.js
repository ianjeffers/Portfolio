import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer">
      <h1>Connect with me</h1>
      <p><FiLinkedin /> <a href="https://www.linkedin.com/in/ian-jeffers-847588193" target="_blank">in/ian-jeffers-847588193</a></p>
      <p><FiMail /> <a href="mailto:IanJeffersEmailPlaceholder@gmail.com">IanJeffersEmailPlaceholder@gmail.com</a></p>
      <p><FiGithub /> <a href="https://github.com/ianjeffers" target="_blank" rel="noopener noreferrer">ianjeffers</a></p>
    </div>
  );
}

export default Footer;
