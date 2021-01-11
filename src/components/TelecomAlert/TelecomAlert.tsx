import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { Colors } from 'utils';

const StyledAlert = styled(Alert)`
  background-color: ${(props) => props.color || Colors.softBlue};
  color: ${Colors.black};
  p {
    font-family: 'SFPro-Regular', sans-serif;
    color: ${(props) => (props.color === Colors.red ? 'white' : Colors.black)};
  }
`;

StyledAlert.Heading = styled(Alert.Heading)`
  font-family: 'SFPro-Bold', sans-serif;
  font-size: 18px;
  color: ${(props) => (props.color === Colors.red ? 'white' : Colors.black)};
`;

type Props = {
  title: string;
  msg: string | null | undefined;
  color?: string;
  show?: boolean;
};

const TelecomAlert: React.FC<Props> = ({
  title,
  msg,
  color,
  show,
  ...props
}) => {
  return (
    <>
      {show && (
        <StyledAlert color={color} {...props}>
          <StyledAlert.Heading color={color}>{title}</StyledAlert.Heading>
          <p className="mb-0">{msg}</p>
        </StyledAlert>
      )}
    </>
  );
};

export default TelecomAlert;
