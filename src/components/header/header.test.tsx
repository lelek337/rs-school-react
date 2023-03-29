import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let wrapper: any;

  describe('correct render', () => {
    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it('should render somthing', () => {
      expect(wrapper).not.toBeNull();
    });

    it('should correct link text', () => {
      expect(wrapper.find('Link').text().toEqual('About Us'));
    });
  });
});
