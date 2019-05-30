import React from 'react';
import { mount } from 'enzyme';

import ErrorAlert from '../ErrorAlert';

const mockData = {
  message: 'its error'
}
describe('<ErrorAlert />', () => {
  it('Renders not empty', () => {
    const wrapper = mount(<ErrorAlert error={mockData}/>);
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('Component should render given error text', () => {
    const wrapper = mount(<ErrorAlert error={mockData}/>);
    expect(wrapper.contains('its error')).toEqual(true);
  });

});
