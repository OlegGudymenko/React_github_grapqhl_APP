import React from 'react';
import { mount } from 'enzyme';

import Spinner from '../Spinner';

describe('<Spinner />', () => {
  it('Renders not empty', () => {
    const wrapper = mount(<Spinner/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
