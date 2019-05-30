import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import FollowerItem from '../FollowerItem';

const mockData = {
  avatarUrl: 'link',
  bio: 'Hello!',
  login: 'username',
  name: 'user',
}

describe('<FollowerItem />', () => {
  it('Renders not empty', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <FollowerItem {...mockData}/>
    </MemoryRouter>);
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
