import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { format } from 'date-fns';

const HeaderWrapper = styled.header`
  min-height: 53px;
  margin: 0 0 30px 0;
  padding: 15px 30px;
  display: block;
  background-color: lightgrey;
  border-bottom: 2px solid black;
`;

const HeaderCompanyName = styled.h6`
  margin: 0;
  padding: 0;
  font-size: 22px;
  line-height: 30px;
  color: black;
`;

const HeaderRow = styled.div`
  display: flex;
`;

const HeaderColumn = styled.div`
  flex: 1 0 50%;

  &:last-child {
      text-align: right;
  }
`;

const Header = () => {
  const {
    loading, error, companyInfo,
  } = useSelector((state) => ({
    loading: state.global.loading,
    error: state.global.error,
    companyInfo: state.global.companyInfo,
  }));

  const renderCompanyInfo = () => {
    // display company info only after it has loaded without errors
    if (!loading && error === null && Object.keys(companyInfo).length > 0) {
      const companyDate = new Date(companyInfo.companyEst);

      return (
        <>
          <HeaderCompanyName>{companyInfo.companyName}</HeaderCompanyName>
          <HeaderRow>
            <HeaderColumn>{companyInfo.companyMotto}</HeaderColumn>
            <HeaderColumn>{format(companyDate, "'Since ' dd/MM/yyyy")}</HeaderColumn>
          </HeaderRow>
        </>
      );
    }

    return null;
  };

  return (
    <HeaderWrapper>
      {renderCompanyInfo()}
    </HeaderWrapper>
  );
};

export default Header;
