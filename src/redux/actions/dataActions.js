import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../types';

import { works } from '../../data';

export const fetchData = () => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: works
  };
};

// export const fetchDataSuccess = () => {
//   return {
//     type: FETCH_DATA,
//     payload: works
//   };
// };

// export const fetchData = dispatch => {
//   return dispatch => {
//     dispatch(fetchDataSuccess);
//   };
// };
