import styled from 'styled-components';
import { Colors } from 'utils';
import { Card } from 'react-bootstrap';

export const StyledCard = styled(Card)`
  background-color: ${Colors.primary};
  background: ${(props) =>
    `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`};
  margin: 8px 16px;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  color: #fff;
`;

StyledCard.Body = styled(StyledCard.Body)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
`;

StyledCard.Text = styled(StyledCard.Text)`
  color: #fff;
  margin: 8px 0px;
  font-size: 28px;
`;

StyledCard.Title = styled.h2`
  font-size: 16px;
  color: #fff;
  align-self: flex-start;
  margin: 0;
  padding: 0;
`;