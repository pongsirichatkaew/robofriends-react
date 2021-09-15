import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
import React from 'react';
import toJson from 'enzyme-to-json';

describe('CardList test', () => {
  it('expect to render CardList Component', () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John snow',
        email: 'john@gmail.com',
      },
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
