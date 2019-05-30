import React from 'react';
import { mount } from 'enzyme';

import RepositoryItem from '../RepositoryItem';

const mockData = {
  login: 'userlogin',
  name: 'user',
  description: 'Super Repo',
  languages: {
    nodes: [
      {
        name: 'css',
        color: 'yellow'
      }
    ]
  }
}

describe('<RepositoryItem />', () => {
  it('Renders not empty', () => {
    const wrapper = mount(<RepositoryItem {...mockData}/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
