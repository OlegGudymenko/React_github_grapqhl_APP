import React from 'react';
import { mount } from 'enzyme';

import ErrorAlert from '../ErrorAlert';

describe('<ErrorAlert />', () => {
  it('Renders not empty', () => {
    const wrapper = mount(<ErrorAlert/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
