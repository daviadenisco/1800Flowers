import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow, mount, configure, render } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('App', () => {
  let app = mount(<App app={{ user: 'test user first' }}/>);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
    console.log(app.debug());
  });

  it('renders the first name', () => {
    expect(app.find('p').text()).toEqual('John Roberts');
  });
});
