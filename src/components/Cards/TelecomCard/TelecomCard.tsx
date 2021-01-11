import React from 'react';
import { StyledCard } from './styles';
import { Colors } from 'utils';

type Props = {
  colors?: any[];
  title: string;
  value: string | number;
};

const TelecomCard: React.FC<Props> = ({ colors, title, value }) => {
  return (
    <StyledCard
      style={{ width: '18rem' }}
      colors={colors || [Colors.primary, Colors.secondary]}
    >
      <StyledCard.Body>
        <StyledCard.Title>{title}</StyledCard.Title>
        <StyledCard.Text>{value}</StyledCard.Text>
      </StyledCard.Body>
    </StyledCard>
  );
};

export default React.memo(TelecomCard);
