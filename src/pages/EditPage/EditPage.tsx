import React, { useEffect, useState } from 'react';
import {
  DeleteButton,
  Header,
  Loading,
  TelecomAlert,
  TelecomButton,
  TelecomSelect,
} from 'components';
import { Container } from 'react-bootstrap';
import {
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  FormTitle,
  StyledForm,
  LoadData,
  FormControlMask,
} from './styles';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from 'config/api';
import {
  onSetError,
  onSetStatus,
  selectNumbers,
  updateNumberAsync,
} from 'ducks/numbersSlice';
import { Colors } from 'utils';
import { currencyArr } from 'utils/constants';

interface Values {
  value: string;
  setupPrice: string;
  monthyPrice: string;
  id: string | number;
  currency: string | number;
}

const EditNumber: React.FC<FormikProps<Values>> = ({ ...props }) => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    dirty,
    setValues,
    resetForm,
  } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { id } = useParams<any>();
  const numbers = useSelector(selectNumbers);

  useEffect(() => {
    return () => {
      dispatch(onSetStatus(null));
      dispatch(onSetError(null));
    };
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    api(`numbers/${id}`).then((resp) => {
      setValues({ ...resp.number });
      setLoading(false);
    });
  }, [dispatch, id, setValues]);

  useEffect(() => {
    if (numbers.status?.type === 'updated' && numbers.status.id === values.id) {
      setTimeout(() => {
        dispatch(onSetStatus(null));
      }, 3000);
    } else if (
      numbers?.status?.type === 'deleted' &&
      numbers?.status.id === values.id
    ) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [dispatch, numbers.status, history, resetForm, values.id]);

  const updateNumber = () => {
    if (isValid && dirty) {
      dispatch(updateNumberAsync(values));
    }
  };

  return (
    <>
      <Header />
      <Container className="d-flex h-100 justify-content-center align-items-center">
        {loading ? (
          <LoadData>
            <Loading msg="Loading Number..." />
          </LoadData>
        ) : (
          <StyledForm>
            <FormTitle>Edit Number</FormTitle>
            <FormGroup controlId="didNumber">
              <FormLabel>DID Number</FormLabel>
              <FormControlMask
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
              <FormLabel>Setup Price</FormLabel>
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
            <FormGroup>
              <FormLabel>Currency</FormLabel>
              <TelecomSelect
                defaultValue={
                  currencyArr.filter(
                    (item) => item.value === values.currency
                  )[0]
                }
                options={currencyArr}
                onChange={(selected: any) =>
                  handleChange('currency')(selected.value)
                }
                onBlur={handleBlur('currency')}
              />
              {errors.currency && touched.currency && (
                <FormText>{errors.currency}</FormText>
              )}
            </FormGroup>
            <div className="d-flex justify-content-end">
              <TelecomButton
                label="Update"
                onClick={updateNumber}
                disabled={!(isValid && dirty)}
              />
              <DeleteButton id={values.id} />
            </div>
            <TelecomAlert
              show={
                numbers.status?.type === 'updated' &&
                numbers.status.id === values.id
              }
              title="Success"
              msg="Nice! The number was updated."
              color={Colors.green}
            ></TelecomAlert>
            <TelecomAlert
              show={numbers.error !== null}
              title="Failed"
              msg="Ops! The updated failed, try again."
              color={Colors.red}
            ></TelecomAlert>
            <TelecomAlert
              show={
                numbers?.status?.type === 'deleted' &&
                numbers?.status.id === values.id
              }
              title="Number Deleted"
              msg="Redirecting in 3 seconds..."
              color={Colors.primary}
            ></TelecomAlert>
          </StyledForm>
        )}
      </Container>
    </>
  );
};

export default withFormik<any, Values>({
  mapPropsToValues: (props) => ({
    value: '',
    monthyPrice: '',
    setupPrice: '',
    id: '',
    currency: '',
  }),
  handleSubmit: () => {},
  validate: (values, props) => {
    const errors = {} as any;

    if (values.value.includes('_')) {
      errors.value = 'Number must be 13 digits';
    }
    return errors;
  },
  validationSchema: Yup.object().shape({
    value: Yup.string()
      .min(17, 'Number must be 13 digits')
      .max(17, 'Number must be 13 digits')
      .required("Please, this field can't be empty"),
    setupPrice: Yup.string().required("Please, this field can't be empty"),
    monthyPrice: Yup.string().required("Please, this field can't be empty"),
    currency: Yup.string().required("Please, this field can't be empty"),
  }),
})(EditNumber);
