import React from 'react';
import { mount } from 'enzyme';

import RepositoryItem from '../RepositoryItem';

describe('<RepositoryItem />', () => {
  it('Renders not empty', () => {
    const wrapper = mount(<RepositoryItem/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
