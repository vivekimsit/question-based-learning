import { combineReducers } from 'redux';
import byId, * as fromById from './byId';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});

const quizes = combineReducers({
  byId,
  listByFilter
});

export default quizes;

export const getIsFetching = (state, filter) => state.listByFilter[filter];
