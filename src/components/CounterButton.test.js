import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';
import React from 'react';
import toJson from 'enzyme-to-json';

it('expect to render Counter Button', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increment the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual('red')
});
