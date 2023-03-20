import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';

describe('Header', () => {
  let wrapper: any;

  it.only('snapshot', () => {
    wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('correct render', () => {
    beforeEach(() => {
      wrapper = shallow(<Header/>);
    });
  
    it('should render somthing', () => {
      expect(wrapper).not.toBeNull()
    });

    it('should correct link text', () => {
      expect(wrapper.find('Link').text().toEqual('About Us'))
    })
  })
})