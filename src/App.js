import React from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring';
import Home from './components/Home';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.8 },
    config: { duration: 25 }
  });

  return (
    <animated.div style={props}>
      <Header style={{ zIndex: 1 }}/>
      <div className="container" style={{ zIndex: 1 }}>
        <Home />
        <div style={{height: "8vh"}}></div> 
        <Skills />
        <div style={{height: "6vh"}}></div> 
        <Experience />
        <div style={{height: "6vh"}}></div> 
        <Projects />
        <div style={{height: "6vh"}}></div> 
        <Education />
        <div style={{height: "6vh"}}></div> 
        <Footer />
      </div>
    </animated.div>
  );
}

export default App;
