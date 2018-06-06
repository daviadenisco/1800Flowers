import React from 'react';
import Enzyme from 'enzyme';
import { configure, mount, render } from 'enzyme';
import Heading from './Heading';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Heading', () => {
  const heading = mount(<Heading />);

  it('renders the data store heading', () => {
    // console.log(footer.debug());
    expect(heading.find('h1').text()).toEqual('Welcome to the Data Store');
  });
});
