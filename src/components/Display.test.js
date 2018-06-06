import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Display from './Display';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Display', () => {
  let display = mount(<Display />);

  it('renders', () => {
    expect(display.find('.location').at(0).text()).toEqual('Chicago, IL');
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<GetData />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
});
