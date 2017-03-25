import { combineReducers } from 'redux';
import quizById, * as fromQuizById from './quizById';
import hintById, * as fromHintById from './hintById';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});

const quizzes = combineReducers({
  quizById,
  hintById,
  listByFilter
});

export default quizzes;

export const getVisibleQuizzes = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromQuizById.getQuiz(state.quizById, id));
};

export const getHints = (state, ids) => {
  return ids.map(id => fromHintById.getHint(state.hintById, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);
