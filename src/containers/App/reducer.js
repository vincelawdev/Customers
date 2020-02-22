import {
  GET_COMPANY_DATA_INIT, GET_COMPANY_DATA_SUCCESS, GET_COMPANY_DATA_ERROR,
  GET_EMPLOYEES_DATA_INIT, GET_EMPLOYEES_DATA_SUCCESS, GET_EMPLOYEES_DATA_ERROR,
  SET_SELECTED_EMPLOYEE, RESET_SELECTED_EMPLOYEE,
} from './constants';

const initialState = {
  loading: false,
  error: null,
  companyInfo: {},
  employees: [],
  selectedEmployeeId: null,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
  case GET_COMPANY_DATA_INIT:
    return {
      ...state,
      loading: true,
    };
  case GET_COMPANY_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      companyInfo: action.companyInfo,
    };
  case GET_COMPANY_DATA_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case GET_EMPLOYEES_DATA_INIT:
    return {
      ...state,
      loading: true,
    };
  case GET_EMPLOYEES_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      employees: action.employees,
    };
  case GET_EMPLOYEES_DATA_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case SET_SELECTED_EMPLOYEE:
    return {
      ...state,
      selectedEmployeeId: action.id,
    };
  case RESET_SELECTED_EMPLOYEE:
    return {
      ...state,
      selectedEmployeeId: null,
    };
  default:
    return state;
  }
}
