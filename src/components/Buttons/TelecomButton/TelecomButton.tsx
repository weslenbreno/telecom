import React from 'react';
import { Colors } from 'utils';
import { StyledButton } from './styles';

type Props = {
  colors?: any[];
  label: string;
  width?: string;
  height?: string;
  onClick?: () => void;
};

const TelecomButton: React.FC<Props> = ({ colors, label, ...props }) => {
  return (
    <StyledButton
      colors={colors || [Colors.primary, Colors.secondary]}
      {...props}
    >
      {label || 'Button'}
    </StyledButton>
  );
};

export default TelecomButton;
