import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const SpinnerWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  flex-direction: column;
  p {
    font-family: 'SFPro-Medium', sans-serif;
    margin: 15px 0px;
    color: #007bff;
  }
`;

type Props = {
  msg?: string;
};

const Loading: React.FC<Props> = ({ msg }) => {
  return (
    <SpinnerWraper>
      <Spinner animation="grow" variant="primary" />
      <p>{msg || 'Loading...'}</p>
    </SpinnerWraper>
  );
};

export default Loading;
