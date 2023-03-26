import React from 'react';
import { shallow, mount } from 'enzyme';
import ItemCard from './ItemCard';
import { cardsGoods } from 'constans/constans';

describe('Correct render', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<ItemCard  newCardsGoods={cardsGoods} index={2}/>)
  });
  
  it('should render somthing', () => {
    expect(wrapper).not.toBeNull()
  });
})