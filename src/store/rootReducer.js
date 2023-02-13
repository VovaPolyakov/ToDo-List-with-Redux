import { combineReducers } from 'redux';

import { toDoReducer} from '../ducks/todo/reducer';

export const rootReducer = combineReducers({
  todo: toDoReducer,
});