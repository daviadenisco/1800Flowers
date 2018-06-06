import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, configure, render } from 'enzyme';
import UserNames from './UserNames';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('UserNames', () => {
  let usernames = mount(<UserNames />);

  it('renders the usernames text', () => {
    console.log(usernames.debug());
  });
});
