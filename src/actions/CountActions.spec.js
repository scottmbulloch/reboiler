import * as types from '../constants/actionTypes';
import * as CountActions from './CountActions';

import { expect } from 'chai';

describe('CountActions', () => {
  describe('incrementCount', () => {
    it('returns an action for incrementing the count by one', () => {
      const actual = CountActions.incrementCount();
      expect(actual).to.deep.equal({ type: types.INC_COUNT });
    });
  });
});
