import React, { CSSProperties } from 'react';
import Select, { Props } from 'react-select';

const customStyles = {
  control: (styles: CSSProperties) => ({
    ...styles,
    borderRadius: 35,
    padding: '0px 25px',
    border: 'none',
    // none of react-select's styles are passed to <Control />
  }),
};

const TelecomSelect: React.FC<Props> = (props) => {
  return <Select styles={customStyles} {...props} />;
};

export default TelecomSelect;
