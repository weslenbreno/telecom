import React from 'react';
import { Header, TelecomButton } from 'components';
import { Container } from 'react-bootstrap';
import {
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  FormTitle,
  StyledForm,
} from './styles';

const Detail = () => {
  return (
    <>
      <Header />
      <Container className="d-flex h-100 justify-content-center align-items-center">
        <StyledForm>
          <FormTitle>Edit Number</FormTitle>
          <FormGroup controlId="didNumber">
            <FormLabel>Email address</FormLabel>
            <FormControl type="text" placeholder="Enter a DID Number" />
            <FormText>We'll never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup controlId="monthyPrice">
            <FormLabel>Monty Price</FormLabel>
            <FormControl type="text" placeholder="Monthy Price" />
            <FormText>We'll never share your email with anyone else.</FormText>
          </FormGroup>
          <FormGroup controlId="setupprice">
            <FormLabel>Password</FormLabel>
            <FormControl type="text" placeholder="Setup Price" />
            <FormText>We'll never share your email with anyone else.</FormText>
          </FormGroup>
          <div className="d-flex justify-content-end">
            <TelecomButton label="Update" />
            <TelecomButton label="Delete" />
          </div>
        </StyledForm>
      </Container>
    </>
  );
};

export default Detail;
