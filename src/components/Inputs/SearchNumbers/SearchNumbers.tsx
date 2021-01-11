import React, { InputHTMLAttributes, useState } from 'react';
import { HintText, Icon, Input, InputWraper } from './styles';
import { Colors } from 'utils';

const Search: React.FC<InputHTMLAttributes<any>> = (props) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="d-flex flex-column m-4 align-items-center">
      <InputWraper>
        <Input
          type="tel"
          placeholder="Search for numbers..."
          {...props}
          onFocus={() => setShowHint(true)}
          onBlur={() => setShowHint(false)}
        />
        <Icon fill={Colors.softBlue} />
      </InputWraper>
      {showHint && (
        <HintText>Hint: Type '+' to search only by country code</HintText>
      )}
    </div>
  );
};

export default Search;
