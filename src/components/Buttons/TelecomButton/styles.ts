import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Colors } from 'utils';

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.primary};
  background: ${(props) =>
    `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`};
  border: none;
  margin: 8px;
  min-height: fit-content;
  min-width: fit-content;
  border-radius: 28px;
  padding: 5px 5px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  width: ${(props) => props?.width || '100px'};
  height: ${(props) => props?.height || 'auto'};
  font-family: 'SFProSemiBold', sans-serif;
  font-size: 14px;

  &:hover {
    transform: scale(1.05);
  }
`;
