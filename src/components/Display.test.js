import React from 'react';
import Enzyme from 'enzyme';
import { configure, mount, shallow } from 'enzyme';
import ConnectedDisplay, { Display } from './Display';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
  user: {
    id: 0,
    first: "John",
    age: 51
  }
};

describe('Display', () => {
  let display = shallow(<Display {...props} />);

  it("should render first name", () => {
    console.log(display.debug());
    // expect(display.find('Connect(Display)').exists()).toBe(true);
  });
});
