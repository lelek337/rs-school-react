import React from "react";
import ItemCard from "../itemCard/ItemCard";
import { cardsGoods } from "../../constans/constans";

import './cards.scss';

const Cards = () => {
  return (
    <div className="cards">
      {
        cardsGoods.map((el, i) => <ItemCard index={i} key={i}/>)
      }
      
    </div>
  )
}

export default Cards;