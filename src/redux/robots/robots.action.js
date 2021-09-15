import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_PENDING,
} from './robots.type';
export const requestRobots = () => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error }));
};
