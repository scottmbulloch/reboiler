import * as types from '../constants/actionTypes';
import countReducer from './countReducer';

import { expect } from 'chai';

describe('countReducer', () => {
  it('returns a default if no type is specified', () => {
    const result = countReducer();
    expect(result).to.deep.equal({ count: 0 });
  });

  it('increments', () => {
    const result = countReducer({ count: 0 }, { type: types.INC_COUNT });
    expect(result).to.deep.equal({ count: 1 });
  })
});
