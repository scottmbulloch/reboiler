import { combineReducers } from 'redux';
import countReducer from './countReducer';

const root = combineReducers({
  countReducer
});

export default root;
