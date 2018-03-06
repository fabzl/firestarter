import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../types';

// import { works } from '../../data';

const apiUrl = 'http://maquinavisual.com/blog';

const pagesEndPoint = `${apiUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
const postsEndPoint = `${apiUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
// export const fetchData = () => {
//   return {
//     type: FETCH_DATA_SUCCESS,
//     payload: works
//   };
// };

const fetchSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
};

const fetchFailed = err => {
  return {
    type: FETCH_DATA_FAILED,
    error: err
  };
};

export const fetchData = dispatch => dispatch =>
  axios
    .get(postsEndPoint)
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(err => dispatch(fetchFailed(err)));
