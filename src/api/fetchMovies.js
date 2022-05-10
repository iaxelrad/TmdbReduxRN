import axios from 'axios';

import {API_KEY} from '../config';
import {GET_MOVIES} from '../redux/actions';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
