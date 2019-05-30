import React from 'react';
import { mount } from 'enzyme';

import FollowerItem from '../FollowerItem';

describe('<FollowerItem />', () => {
  it('Renders not empty', () => {
    const wrapper = mount(<FollowerItem/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
