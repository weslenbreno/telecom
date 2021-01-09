import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Colors } from 'utils';

const StyledHeader = styled(Navbar)`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  background: linear-gradient(to right, ${Colors.primary}, ${Colors.secondary});
  background-color: ${Colors.primary};
  & > .navbar-brand {
    color: #fff;
  }
`;

const Header = () => {
  return (
    <StyledHeader expand="lg">
      <Navbar.Brand href="/">Telecom Carrear</Navbar.Brand>
    </StyledHeader>
  );
};

export default Header;
