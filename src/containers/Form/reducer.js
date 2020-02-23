import {
  SET_FORM_FIELD, SET_FORM_ERRORS, SEARCH_CUSTOMERS_INIT, SEARCH_CUSTOMERS_SUCCESS, SEARCH_CUSTOMERS_ERROR,
} from './constants';

const initialState = {
  searchLoading: false,
  searchError: null,
  searchResults: [],
  formFields: {
    firstName: '',
    surname: '',
    email: '',
    mobile: '',
  },
  formErrors: [],
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
  case SET_FORM_FIELD:
    return {
      ...state,
      formFields: {
        ...state.formFields,
        [action.key]: action.value,
      }      
    };
  case SET_FORM_ERRORS:
    return {
      ...state,
      formErrors: action.errors,
    };
  case SEARCH_CUSTOMERS_INIT:
    return {
      ...state,
      searchLoading: true,
    };
  case SEARCH_CUSTOMERS_SUCCESS:
    return {
      ...state,
      searchLoading: false,
      searchResults: action.results,
    };
  case SEARCH_CUSTOMERS_ERROR:
    return {
      ...state,
      searchLoading: false,
      searchError: action.error,
    };
  default:
    return state;
  }
}
