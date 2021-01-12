import React from 'react';
import { Colors } from 'utils';
import { StyledButton } from './styles';

type Props = {
  colors?: any[];
  label: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const TelecomButton: React.FC<Props> = ({
  colors,
  label,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      disabled={disabled}
      colors={colors || [Colors.primary, Colors.secondary]}
      {...props}
    >
      {label || 'Button'}
    </StyledButton>
  );
};

export default TelecomButton;
