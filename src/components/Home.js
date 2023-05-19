// Home.js
import React from 'react';
import { Element } from 'react-scroll';
import './Home.css'; // Assume you have this CSS file
import Introduction from './Introduction';

function Home() {
  return (
    <Element name="home" className="home-container">
      {/* <h1 className="home-title">Welcome to My Portfolio</h1>
      <p className="home-intro">Hi, I'm Ian. I'm a software engineer specialized in web development and machine learning.</p> */}
      <Introduction/>
    </Element>
  );
}

export default Home;
