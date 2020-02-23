import axios from 'axios';
import {
  SEARCH_CUSTOMERS_INIT, SEARCH_CUSTOMERS_SUCCESS, SEARCH_CUSTOMERS_ERROR,
} from './constants';

export function searchCustomersInit() {
  return {
    type: SEARCH_CUSTOMERS_INIT,
  };
}

export function searchCustomersSuccess(results) {
  return {
    type: SEARCH_CUSTOMERS_SUCCESS,
    results,
  };
}

export function searchCustomersError(error) {
  return {
    type: SEARCH_CUSTOMERS_ERROR,
    error,
  };
}

export const getEmployeesData = () => (dispatch) => {
  dispatch(searchCustomersInit());

  axios
    .get('https://customer-server.herokuapp.com/search')
    .then((response) => {
      dispatch(searchCustomersSuccess(response.data));
    })
    .catch((error) => {
      dispatch(searchCustomersError(error));
    });
};
