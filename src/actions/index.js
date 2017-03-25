import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchQuizzes = (filter) => (dispatch, getState) => {
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

export const addQuiz = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    dispatch({
      type: 'ADD_QUIZ_SUCCESS',
      response: normalize(response, schema.quiz),
    });
  });

export const toggleQuiz = (id) => (dispatch) =>
  api.toggleQuiz(id).then(response => {
    dispatch({
      type: 'TOGGLE_QUIZ_SUCCESS',
      response: normalize(response, schema.quiz),
    });
  });

export const showHint = (id) => (dispatch) => {
  console.log('id//////////', id)
  dispatch({
    type: 'FETCH_HINT_REQUEST',
    id,
  });

  api.showHint(id).then(response => {
    dispatch({
      type: 'FETCH_HINT_SUCCESS',
      response: normalize(response, schema.hint),
    });
  });
}
