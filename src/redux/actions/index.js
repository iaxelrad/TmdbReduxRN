import axios from 'axios';
import {API_KEY} from '../../config';
import {ADD_FAVORITE_ITEM, GET_MOVIES, REMOVE_FAVORITE_ITEM} from './types';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({type: GET_MOVIES, payload: res.data});
      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite = movie => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: movie,
  });
};
export const removeFavorite = movie => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: movie,
  });
};
