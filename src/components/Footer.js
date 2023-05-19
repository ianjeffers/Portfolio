// Footer.js
import React from 'react';
import { FiMail, FiGithub } from 'react-icons/fi'; // import icons
import './Footer.css'; // ensure to create this CSS file

function Footer() {
  return (
    <div className="footer">
      <h1>Connect with me</h1>
      <p><FiMail /> <a href="mailto:IanJeffers99@gmail.com">IanJeffers99@gmail.com</a></p>
      <p><FiGithub /> <a href="https://github.com/ianjeffers" target="_blank" rel="noopener noreferrer">ianjeffers</a></p>
    </div>
  );
}

export default Footer;
