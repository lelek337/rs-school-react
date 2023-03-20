import React, { Component } from "react";
import ItemCard from "../itemCard/ItemCard";
import { cardsGoods } from "../../constans/constans";
import { Icard } from "../../types/interfaces";

import './cards.scss';

class Cards extends Component {
  state = {
    goods: []
  };

  componentDidMount() {
    const localStorageValue = localStorage.getItem('searchValue');
    const newCardsGoods = cardsGoods.filter(elem => elem.title.includes(localStorageValue!)
    )
    const resCardsGoods = localStorageValue ? newCardsGoods : cardsGoods;
    this.setState((state) => ({goods: resCardsGoods}));
    return
  }
  
  render() {
    return (
      <div className="cards">
        {
          this.state.goods.map((el, i) => <ItemCard index={i} key={i} newCardsGoods={this.state.goods}/>)
        }
        
      </div>
    )
  }
}

export default Cards;