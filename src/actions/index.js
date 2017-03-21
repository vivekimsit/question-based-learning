import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchQizzes = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_QUIZZES_REQUEST',
    filter,
  });

  return api.fetchQuizzes(filter).then(
    response => {
      dispatch({
        type: 'FETCH_QUIZZES_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfQuiz),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_QUIZZES_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    }
  );
};
