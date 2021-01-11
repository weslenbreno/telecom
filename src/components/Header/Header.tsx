import { TelecomButton } from 'components';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Colors } from 'utils';
import { useHistory } from 'react-router-dom';
import phoneIconImg from 'assets/images/phone-call.png';

const StyledHeader = styled(Navbar)`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  background: linear-gradient(to right, ${Colors.primary}, ${Colors.secondary});
  background-color: ${Colors.primary};
  & > .navbar-brand {
    color: #fff;
  }
  font-family: 'SFProHeavy', sans-serif;
  justify-content: space-around;
`;

const PhoneIcon = styled.img`
  width: 25px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.white};
  &:hover {
    cursor: pointer;
    color: ${Colors.yellow};
  }
`;

const Brand = styled.h1`
  font-family: 'SFProHeavy', sans-serif;
  font-size: 16px;
  padding: 10px 0px;
  padding: 0px 10px;
  margin: 0;
`;

const Header = () => {
  const history = useHistory();
  return (
    <StyledHeader expand="lg">
      <Logo onClick={() => history.push('/')}>
        <PhoneIcon src={phoneIconImg} />
        <Brand>Telecom</Brand>
      </Logo>
      <TelecomButton
        label="New Number"
        width="120px"
        onClick={() => history.push('/create')}
      />
    </StyledHeader>
  );
};

export default Header;
