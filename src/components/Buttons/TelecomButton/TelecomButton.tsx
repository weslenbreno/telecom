import React from 'react';
import { Colors } from 'utils';
import { StyledButton } from './styles';

type Props = {
  colors?: any[];
  label: string;
};

const TelecomButton: React.FC<Props> = ({ colors, label }) => {
  return (
    <StyledButton colors={colors || [Colors.primary, Colors.secondary]}>
      {label || 'Button'}
    </StyledButton>
  );
};

export default TelecomButton;
