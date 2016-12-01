import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Counter } from './Counter';

function setup() {
  const props = {
    actions: {
      incrementCount: () => {}
    },
    count: 0
  };
  const wrapper = shallow(<Counter {...props} />);

  return {
    props,
    wrapper
  };
}

describe('(Component) Counter', () => {
  it('renders...', () => {
    const { wrapper } = setup();
    expect(wrapper).to.have.length(1);
  });
});
