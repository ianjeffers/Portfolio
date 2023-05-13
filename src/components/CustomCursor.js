import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background: #fe3a9e;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.1s ease-out;
  z-index: 9999;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleCursor);
    return () => window.removeEventListener('mousemove', handleCursor);
  }, []);

  return <Cursor style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CustomCursor;
