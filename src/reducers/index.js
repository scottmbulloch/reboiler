import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import countReducer from './countReducer';

const root = combineReducers({
  countReducer,
  routing: routerReducer
});

export default root;
