import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from "react-scroll";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  z-index: 1000;
`;

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1em;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Ian Jeffers</h1>
      <StyledNav>
        <ul>
          <li><ScrollLink to="home" smooth={true} style={{ cursor: 'pointer' }}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} style={{ cursor: 'pointer' }}>About</ScrollLink></li>
          {/* Add more navigation items as needed */}
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
