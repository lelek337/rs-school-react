import React from 'react';
import { shallow } from 'enzyme';
import { cardsGoods } from 'constans/constans';
import ItemCard from './ItemCard';

describe('Correct render', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<ItemCard newCardsGoods={cardsGoods} index={2} />);
  });

  it('should render somthing', () => {
    expect(wrapper).not.toBeNull();
  });
});
