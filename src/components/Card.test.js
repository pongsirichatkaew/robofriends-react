import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import React from 'react';
import toJson from 'enzyme-to-json';

describe('my frist enzyme test', () => {
  it('expect to render Card Component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
