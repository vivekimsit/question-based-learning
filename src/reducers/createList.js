import { combineReducers } from 'redux';

const createList = (filter) => {
  const handleToggle = (state, action) => {
    const { result: toggledId, entities } = action.response;
    const { completed } = entities.quizzes[toggledId];
    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    );
    return shouldRemove ?
      state.filter(id => id !== toggledId) :
      state;
  };

  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_QUIZZES_SUCCESS':
        return filter === action.filter ?
          action.response.result :
          state;
      case 'ADD_QUIZ_SUCCESS':
        return filter !== 'completed' ?
          [...state, action.response.result] :
          state;
      case 'TOGGLE_QUIZ_SUCCESS':
        return handleToggle(state, action);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_QUIZZES_REQUEST':
        return true;
      case 'FETCH_QUIZZES_SUCCESS':
      case 'FETCH_QUIZZES_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_QUIZZES_FAILURE':
        return action.message;
      case 'FETCH_QUIZZES_REQUEST':
      case 'FETCH_QUIZZES_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

// Getters || selectors
export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
