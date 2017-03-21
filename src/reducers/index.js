import { combineReducers } from 'redux';
import byId, * as fromById from './byId';

const quizes = combineReducers({
  byId
});

export default quizes;
