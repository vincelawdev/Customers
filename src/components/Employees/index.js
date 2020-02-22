import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import EmployeeCard from '../EmployeeCard';

const EmployeesBarRow = styled.section`
  margin-bottom: 20px;
  padding-bottom: 8px;
  display: flex;
  border-bottom: 1px solid black;
`;

const EmployeesBarColumn = styled.div`
  flex-grow: 1;

  &:last-child {
    font-size: 14px;
    line-height: 14px;
    text-align: right;
  }
`;

const EmployeesBarHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 18px;
  color: black;
`;

const EmployeesContainer = styled.section`
  margin: 0 -15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const EmployeesLoading = styled.div`
  margin: 0 15px;
`;

const Employees = () => {
  const {
    loading, error, employees,
  } = useSelector((state) => ({
    loading: state.global.loading,
    error: state.global.error,
    employees: state.global.employees,
  }));

  const sortFirstName = (a, b) => {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  };

  const renderEmployees = () => {
    // display loading message
    if (loading && error === null) {
      return (<EmployeesLoading>Loading...</EmployeesLoading>);
    }

    // display employees only after it has loaded without errors
    if (!loading && error === null && Array.isArray(employees) && employees.length > 0) {
      // sort employees by first name
      const sortedEmployees = employees.sort(sortFirstName);

      return sortedEmployees.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} />
      ));
    }

    return null;
  };

  return (
    <>
      <EmployeesBarRow>
        <EmployeesBarColumn>
          <EmployeesBarHeading>Our Employees</EmployeesBarHeading>
        </EmployeesBarColumn>
        <EmployeesBarColumn>
          Sort by <select><option>first name</option></select>
        </EmployeesBarColumn>
      </EmployeesBarRow>
      <EmployeesContainer>
        {renderEmployees()}
      </EmployeesContainer>
    </>
  );
};

export default Employees;
