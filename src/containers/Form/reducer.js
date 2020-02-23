import {
  SEARCH_CUSTOMERS_INIT, SEARCH_CUSTOMERS_SUCCESS, SEARCH_CUSTOMERS_ERROR,
} from './constants';

const initialState = {
  searchLoading: false,
  searchError: null,
  searchResults: [],
  formErrors: [],
  formFields: {
    firstName: '',
    surname: '',
    email: '',
    mobile: '',
  }
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
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
