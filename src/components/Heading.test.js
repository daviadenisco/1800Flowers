import React from 'react';
import Enzyme from 'enzyme';
import { configure, mount, render } from 'enzyme';
import Heading from './Heading';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Heading', () => {
  let heading = mount(<Heading />);

  it('renders the heading text', () => {
    // console.log(footer.debug());
    expect(heading.find('h1').text()).toEqual('Welcome to the Data Store');
  });
});
