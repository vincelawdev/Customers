import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import { setFormField } from './actions';

const Form = () => {
  const { firstName, surname, email, mobile } = useSelector((state) => ({
    firstName: state.form.formFields.firstName,
    surname: state.form.formFields.surname,
    email: state.form.formFields.email,
    mobile: state.form.formFields.mobile,
  }));
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    dispatch(setFormField(key, value))
  };

  return (
    <Container>
      <h1>Customers Search Form</h1>
      <h2>Please enter the customer&quot;s first name, surname, email or mobile number.</h2>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" value={firstName} onChange={event => handleChange('firstName', event.target.value)} />
  
      <label htmlFor="surname">Surname</label>
      <input id="surname" type="text" value={surname} onChange={event => handleChange('surname', event.target.value)} />
  
      <label htmlFor="email">Email</label>
      <input id="email" type="text" value={email} onChange={event => handleChange('email', event.target.value)} />
  
      <label htmlFor="mobile">Mobile</label>
      <input id="mobile" type="text" value={mobile} onChange={event => handleChange('mobile', event.target.value)} />
      
      <button type="button">Search</button>
    </Container>
  );
}
  
export default Form;
