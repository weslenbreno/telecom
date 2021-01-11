import styled from 'styled-components';
import { Colors } from 'utils';
import { ReactComponent as SearchIcon } from 'assets/images/search.svg';

export const Input = styled.input`
  font-family: 'SFPro-Medium', sans-serif;
  font-size: 13px;
  color: ${Colors.black};
  display: flex;
  width: 100%;
  border-radius: 25px;
  padding: 10px 25px;
  background: ${Colors.white};
  border: none;
  color: ${Colors.black};
  min-width: 280px;
  width: 300px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.2);
  ::placeholder {
    color: #607d8b;
    font-family: 'SFPro-Medium', sans-serif;
    font-size: 13px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${Colors.primary};
  }
`;

export const HintText = styled.small`
  color: ${Colors.softBlue};
  margin: 5px 15px;
  text-align: center;
  font-family: 'SFPro-regular', sans-serif;
`;

export const Icon = styled(SearchIcon)`
  color: red;
  width: 20px;
  position: absolute;
  right: 25px;
`;

export const InputWraper = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
`;
