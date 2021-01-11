import React, { useState } from 'react';
import { AlertModal, TelecomButton } from 'components';
import { useDispatch } from 'react-redux';
import { deleteNumberAsync } from 'ducks/numbersSlice';

type Props = {
  id: string | number;
  width?: string;
  height?: string;
};

const DeleteButton: React.FC<Props> = ({ id, width, height }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <TelecomButton
        label="Delete"
        width={width}
        height={height}
        colors={['rgba(0, 147,233, 0.85)', 'rgba(254, 67, 101, 0.85)']}
        onClick={() => setShowAlert(true)}
      />
      {showAlert && (
        <AlertModal
          isVisible={(status) => setShowAlert(status)}
          type="danger"
          title="Are you sure?"
          msg="The number will be permanently deleted."
          action={() => {
            dispatch(deleteNumberAsync(id));
          }}
        />
      )}
    </>
  );
};

export default React.memo(DeleteButton);
