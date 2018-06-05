import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { configure, mount, render } from 'enzyme';
import GetData from './GetData';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('GetData', () => {
  let getdata = mount(<GetData />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetData />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
