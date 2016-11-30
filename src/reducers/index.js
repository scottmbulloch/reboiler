import * as actions from '../constants/actionTypes';

let initialState = { count: 0 };

function rootReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.INC_COUNT:
      return Object.assign({}, state, { count: (state.count + 1) });
    default:
      return state;
  }
};

export default rootReducer;
