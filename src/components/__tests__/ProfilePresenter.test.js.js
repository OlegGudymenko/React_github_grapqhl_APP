import React from 'react';
import { mount } from 'enzyme';

import ProfilePresenter from '../ProfilePresenter';

describe('<ProfilePresenter />', () => {
  it('Renders not empty', () => {
    const wrapper = mount(<ProfilePresenter/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
