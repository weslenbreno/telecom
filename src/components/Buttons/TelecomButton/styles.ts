import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Colors } from 'utils';

export const StyledButton = styled(Button)`
  background-color: ${Colors.primary};
  background: ${(props) =>
    `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`};
  border: none;
  margin: 8px;
  border-radius: 28px;
  padding: 5px 30px;
  box-shadow: 0px 0px 7px rgba(0,0,0,0.4);
`;
