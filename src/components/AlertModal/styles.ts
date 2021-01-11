import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { Colors } from 'utils';

const mapTypes = {
  success: Colors.green,
  danger: Colors.red,
  default: Colors.primary,
};

export const StyledModal = styled(Modal)`
  .modal-content {
    background-color: ${(props) => mapTypes[props?.type || 'default']};
    border-radius: 12px;
    color: ${Colors.white};
  }
`;

StyledModal.Header = styled(Modal.Header)`
  border: none;
  font-family: 'SFPro-Bold';
  font-size: 14px;
  padding: 25px;
  padding-bottom: 8px;
`;

StyledModal.Body = styled(Modal.Body)`
  font-family: 'SFPro-Medium';
  padding: 0px 25px;
  padding-bottom: 8px;
`;

StyledModal.Footer = styled(Modal.Footer)`
  border: none;
  padding: 10px 25px;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  min-height: fit-content;
  min-width: fit-content;
  border-radius: 28px;
  width: ${(props) => props?.width || '50px'};
  height: ${(props) => props?.height || 'auto'};
  font-family: 'SFProSemiBold', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;

  &:hover {
    border: 1px solid ${Colors.white};
    padding: 5px 25px;
    background-color: transparent;
  }
`;
