import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import Container from '../../components/Container';
import FormErrorBox from '../../components/FormErrorBox';
import FormStatusBox from '../../components/FormStatusBox';
import { setFormField, setFormErrors, searchCustomers } from './actions';

const Form = () => {
  const { firstName, surname, email, mobile, formFields, formErrors, searchLoading, searchError, searchResults } = useSelector((state) => ({
    firstName: state.form.formFields.firstName,
    surname: state.form.formFields.surname,
    email: state.form.formFields.email,
    mobile: state.form.formFields.mobile,
    formFields: state.form.formFields,
    formErrors: state.form.formErrors,
    searchLoading: state.form.searchLoading,
    searchError: state.form.searchError,
    searchResults: state.form.searchResults,
  }));
  const dispatch = useDispatch();

  // validate email address with email regex from: http://emailregex.com/
  // eslint-disable-next-line no-useless-escape
  const emailIsValid = text => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text);

  // validate australian mobile number format - 04XXXXXXXX 
  const mobileIsValid = text => /^04[0-9]{8}$/.test(text);

  const validateFormFields = () => {
    const errors = [];

    if (firstName === '') {
      errors.push('First name is a required field');
    }

    if (surname === '') {
      errors.push('Surname is a required field');
    }

    if (email === '') {
      errors.push('Email is a required field');
    }

    if (firstName.length < 3) {
      errors.push('Please enter a minimum of three characters for the first name');
    }

    if (surname.length < 3) {
      errors.push('Please enter a minimum of three characters for the surname');
    }

    if (email !== '' && !emailIsValid(email)) {
      errors.push('Please enter a valid email address');
    }

    if (mobile !== '' && !mobileIsValid(mobile)) {
      errors.push('Please enter a valid mobile number starting with 04 followed by eight digits');
    }

    dispatch(setFormErrors(errors));

    if (errors.length === 0) {
      return true;
    }

    return false;
  };

  const handleChange = (key, value) => {
    dispatch(setFormField(key, value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    if (validateFormFields()) {
      dispatch(searchCustomers(formFields));
    }
  };  

  // redirect to results page if results found
  if (Array.isArray(searchResults) && searchResults.length > 0) {
    return <Redirect to="/results" />
  }

  return (
    <Container>
      <h1>Customers Search Form</h1>
      <h2>Please enter the customer&apos;s first name, surname and email. Mobile number is optional.</h2>
      
      <FormStatusBox message={searchLoading ? 'Searching...' : ''} />
      <FormStatusBox message={searchError || ''} />
      <FormStatusBox message={(Array.isArray(searchResults) && searchResults.length === 0 && !searchLoading) ? 'There is no such customer.' : ''} />
      <FormErrorBox errors={formErrors} />
      
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" value={firstName} onChange={event => handleChange('firstName', event.target.value)} />
    
        <label htmlFor="surname">Surname</label>
        <input id="surname" type="text" value={surname} onChange={event => handleChange('surname', event.target.value)} />
    
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={email} onChange={event => handleChange('email', event.target.value)} />
    
        <label htmlFor="mobile">Mobile</label>
        <input id="mobile" type="text" value={mobile} onChange={event => handleChange('mobile', event.target.value)} />
        
        <button type="submit">Search</button>
      </form>
    </Container>
  );
}
  
export default Form;
