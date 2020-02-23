import axios from 'axios';
import {
  SET_FORM_FIELD, SET_FORM_ERRORS, SEARCH_CUSTOMERS_INIT, SEARCH_CUSTOMERS_SUCCESS, SEARCH_CUSTOMERS_ERROR,
} from './constants';

export function setFormField(key, value) {
  return {
    type: SET_FORM_FIELD,
    key,
    value,
  };
}

export function setFormErrors(errors) {
  return {
    type: SET_FORM_ERRORS,
    errors,
  };
}

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

export const searchCustomers = formFields => (dispatch) => {
  dispatch(searchCustomersInit());

  axios
    .post('https://customer-server.herokuapp.com/search', formFields)
    .then((response) => {
      dispatch(searchCustomersSuccess(response.data));
    })
    .catch((error) => {
      dispatch(searchCustomersError(error));
    });
};
