import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, configure, render } from 'enzyme';
import Footer from './Footer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  let footer = mount(<Footer />);

  it('renders the footer link', () => {
    // console.log(footer.debug());
    expect(footer.find('h1').text()).toEqual('Contact Us');
  });

  describe('clicking contact us', () => {
    expect(footer.find('a').simulate('click'));
  });
});
