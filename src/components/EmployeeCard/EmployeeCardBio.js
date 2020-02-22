import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EmployeeCardBioContainer = styled.div`
  padding: 0 15px 15px 0;
  font-size: 16px;
  line-height: 18px;
`;

const EmployeeCardBio = (props) => {
  const { bio } = props;

  // split the first sentence that ends with a full stop
  const bioSplit = bio.split('.', 1);

  const renderShortBio = () => {
    // return first sentence with full stop at the end
    if (bioSplit.length > 0) {
      return `${bioSplit[0]}.`;
    }

    return null;
  };

  return (
    <EmployeeCardBioContainer>
      {renderShortBio()}
    </EmployeeCardBioContainer>
  );
};

EmployeeCardBio.propTypes = {
  bio: PropTypes.string.isRequired,
};

export default EmployeeCardBio;
