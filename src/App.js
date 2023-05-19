import React from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring';
import Home from './components/Home';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParallax from './components/BackgroundParallax';

function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.8 },
    config: { duration: 25 }
  });

  return (
    <animated.div style={props}>
      {/* <BackgroundParallax/> */}
      <Header style={{ zIndex: 1 }}/>
      <div className="container" style={{ zIndex: 1 }}>
        <Home />
        <div style={{height: "8vh"}}></div> 
        {/* <Introduction />
        <div style={{height: "6vh"}}></div>  */}
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
