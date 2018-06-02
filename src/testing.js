import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
var json = require('./json.js').json;

configure({ adapter: new Adapter() });

const instance = userDataStore.getElement().props;

describe("<App />", () => {
  let userDataStore = mount(<App user={{ first: 'test user' }} />);

  it('renders the user first name', () => {
    // expect(toJson(userDataStore)).toMatchSnapshot();
    console.log(user.debug());
  });
  //
  // it("has `retreiveUserInfo` as props", () => {
  //   expect(userDataStore.props().selectedUser).toEqual(retreiveUserInfo)
  // });
  //
  // it("has `first` as props", () => {
  //   expect(retreiveUserInfo.props().first).toEqual(John)
  // });
});
