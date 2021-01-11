import React, { useEffect } from 'react';
import { Header, TelecomAlert, TelecomButton } from 'components';
import { Container } from 'react-bootstrap';
import {
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  FormTitle,
  StyledForm,
} from './styles';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik';
import { Colors } from 'utils';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createNumberAsync,
  onSetError,
  onSetStatus,
  selectNumbers,
} from 'ducks/numbersSlice';

interface Values {
  value: string;
  setupPrice: string;
  monthyPrice: string;
}

const CreateNumber: React.FC<FormikProps<Values>> = ({ ...props }) => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const numbers = useSelector(selectNumbers);

  useEffect(() => {
    return () => {
      dispatch(onSetStatus(null));
      dispatch(onSetError(null));
    };
  }, [dispatch]);

  useEffect(() => {
    if (numbers?.status?.type === 'created') {
      resetForm();
      setTimeout(() => {
        dispatch(onSetStatus(null));
      }, 3000);
    }
  }, [dispatch, numbers.status, history, resetForm]);

  const saveNumber = () => {
    dispatch(createNumberAsync(values));
  };

  return (
    <>
      <Header />
      <Container className="d-flex h-100 justify-content-center align-items-center">
        <StyledForm>
          <FormTitle>New DID Number</FormTitle>
          <FormGroup controlId="didNumber">
            <FormLabel>DID Number</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter a valid DID Number"
              onBlur={handleBlur('value') as (event: any) => void}
              onChange={handleChange('value')}
              value={values.value}
              mask="+99 99 99999-9999"
            />
            {errors.value && touched.value && (
              <FormText>{errors.value}</FormText>
            )}
          </FormGroup>
          <FormGroup controlId="monthyPrice">
            <FormLabel>Monty Price</FormLabel>
            <FormControl
              type="number"
              placeholder="Monthy Price"
              onBlur={handleBlur('monthyPrice') as (event: any) => void}
              onChange={handleChange('monthyPrice')}
              value={values.monthyPrice}
            />
            {errors.monthyPrice && touched.monthyPrice && (
              <FormText>{errors.monthyPrice}</FormText>
            )}
          </FormGroup>
          <FormGroup controlId="setupprice">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="number"
              placeholder="Setup Price"
              onBlur={handleBlur('setupPrice') as (event: any) => void}
              onChange={handleChange('setupPrice')}
              value={values.setupPrice}
            />
            {errors.setupPrice && touched.setupPrice && (
              <FormText>{errors.setupPrice}</FormText>
            )}
          </FormGroup>
          <div className="d-flex justify-content-end">
            <TelecomButton
              label="Save"
              onClick={saveNumber}
              colors={[Colors.blue, Colors.blue]}
            />
            <TelecomButton label="Back" onClick={() => history.push('/')} />
          </div>
          <TelecomAlert
            show={numbers?.status?.type === 'created'}
            title="Success"
            msg="Nice! The number was created."
            color={Colors.green}
          ></TelecomAlert>

          <TelecomAlert
            show={numbers.error !== null}
            title="Failed"
            msg={
              numbers?.error?.msg || 'Ops! Creating number failed, try again.'
            }
            color={Colors.red}
          ></TelecomAlert>
        </StyledForm>
      </Container>
    </>
  );
};

export default withFormik<any, Values>({
  mapPropsToValues: () => ({ value: '', monthyPrice: '', setupPrice: '' }),
  handleSubmit: () => {},
  validationSchema: Yup.object().shape({
    value: Yup.string().required("Please, this field can't be empty"),
    setupPrice: Yup.string().required("Please, this field can't be empty"),
    monthyPrice: Yup.string().required("Please, this field can't be empty"),
  }),
})(CreateNumber);
