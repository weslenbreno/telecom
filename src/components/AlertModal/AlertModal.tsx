import React, { useEffect, useState } from 'react';
import { StyledButton, StyledModal } from './styles';

type Props = {
  title: string;
  msg: string;
  type?: string;
  isVisible: (status: boolean) => void;
  action?: () => void | null;
};

const AlertModal: React.FC<Props> = ({
  title,
  msg,
  action,
  type,
  isVisible,
}) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    isVisible(show);
  }, [isVisible, show]);

  const handleClose = () => {
    setShow(false);
  };

  const handleAction = () => {
    setShow(false);
    return action ? action() : null;
  };

  return (
    <>
      <StyledModal
        show={show}
        onHide={handleClose}
        type={type}
        animation={false}
        backdrop="static"
      >
        <StyledModal.Header closeButton>
          <StyledModal.Title>{title}</StyledModal.Title>
        </StyledModal.Header>
        <StyledModal.Body>{msg}</StyledModal.Body>
        <StyledModal.Footer>
          <StyledButton onClick={handleClose}>Close</StyledButton>
          <StyledButton onClick={handleAction}>Delete</StyledButton>
        </StyledModal.Footer>
      </StyledModal>
    </>
  );
};

export default AlertModal;
