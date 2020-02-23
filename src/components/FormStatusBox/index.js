import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormStatusContainer = styled.div`
    margin: 0 0 30px 0;
    padding: 20px;
    display: block;
    border: 1px solid grey;
`;

const FormStatusBox = (props) => {
  const { message } = props;
  
  if (message) {
    return (
      <FormStatusContainer>
        {message}
      </FormStatusContainer>      
    );
  }
  
  return null;
};
  
FormStatusBox.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FormStatusBox;
