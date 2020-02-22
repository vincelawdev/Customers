import axios from 'axios';
import {
  GET_COMPANY_DATA_INIT, GET_COMPANY_DATA_SUCCESS, GET_COMPANY_DATA_ERROR,
  GET_EMPLOYEES_DATA_INIT, GET_EMPLOYEES_DATA_SUCCESS, GET_EMPLOYEES_DATA_ERROR,
  SET_SELECTED_EMPLOYEE, RESET_SELECTED_EMPLOYEE,
} from './constants';

export function getCompanyDataInit() {
  return {
    type: GET_COMPANY_DATA_INIT,
  };
}

export function getCompanyDataSuccess(companyInfo) {
  return {
    type: GET_COMPANY_DATA_SUCCESS,
    companyInfo,
  };
}

export function getCompanyDataError(error) {
  return {
    type: GET_COMPANY_DATA_ERROR,
    error,
  };
}

export const getCompanyData = () => (dispatch) => {
  dispatch(getCompanyDataInit());

  axios
    .get('https://company-json.herokuapp.com/companyInfo')
    .then((response) => {
      dispatch(getCompanyDataSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getCompanyDataError(error));
    });
};

export function getEmployeesDataInit() {
  return {
    type: GET_EMPLOYEES_DATA_INIT,
  };
}

export function getEmployeesDataSuccess(employees) {
  return {
    type: GET_EMPLOYEES_DATA_SUCCESS,
    employees,
  };
}

export function getEmployeesDataError(error) {
  return {
    type: GET_EMPLOYEES_DATA_ERROR,
    error,
  };
}

export const getEmployeesData = () => (dispatch) => {
  dispatch(getEmployeesDataInit());

  axios
    .get('https://company-json.herokuapp.com/employees')
    .then((response) => {
      dispatch(getEmployeesDataSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getEmployeesDataError(error));
    });
};

export function setSelectedEmployeeId(id) {
  return {
    type: SET_SELECTED_EMPLOYEE,
    id,
  };
}

export function resetSelectedEmployeeId() {
  return {
    type: RESET_SELECTED_EMPLOYEE,
  };
}
