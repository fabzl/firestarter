import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../types';

const initialState = {
  loading: false,
  data: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    default:
      return state;
  }
};
