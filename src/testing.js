import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";
import App from './App';
import { shallow, mount, render } from 'enzyme';
var json = require('./json.js').json;

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

const userDataStore = mount(<App first={John} additionalInfo={retreiveUserInfo} />
);
const instance = userDataStore.getElement().props;

describe("<App />", () => {
  it("renders correctly", () => {
    expect(toJson(userDataStore)).toMatchSnapshot();
  });

  it("has `retreiveUserInfo` as props", () => {
    expect(userDataStore.props().selectedUser).toEqual(retreiveUserInfo)
  });

  it("has `first` as props", () => {
    expect(retreiveUserInfo.props().first).toEqual(John)
  });
});
