import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Colors } from 'utils';

export const StyledForm = styled(Form)`
  margin: 25px;
  margin-top: 50px;
  flex: 1;
`;

export const FormTitle = styled.h2`
  color: ${Colors.black};
  font-size: 26px;
  margin: 15px 0px;
  margin-bottom: 35px;
`;

export const FormGroup = styled(Form.Group)`
  text-align: left;
`;

export const FormText = styled(Form.Text)`
  padding-left: 25px;
  color: ${Colors.red};
`;

export const FormLabel = styled(Form.Label)`
  color: ${Colors.softBlue};
  font-size: 16px;
  padding-left: 5px;
`;

export const FormControl = styled(Form.Control)`
  border-radius: 25px;
  padding: 5px 25px;
  background: ${Colors.white};
  border: none;
  color: ${Colors.black};
`;
