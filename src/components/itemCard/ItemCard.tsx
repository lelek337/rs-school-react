import React from "react";
import { Icard } from "../../types/inerfaces";
import { gidrotsikl1, 
        gidrotsikl10, 
        gidrotsikl11, 
        gidrotsikl12, 
        gidrotsikl2, 
        gidrotsikl3, 
        gidrotsikl4, 
        gidrotsikl5, 
        gidrotsikl6, 
        gidrotsikl7, 
        gidrotsikl8, 
        gidrotsikl9 } from "../../assets/jpg";
import { cardsGoods } from "../../constans/constans";
import { BsFillBalloonHeartFill as Heart, BsFillCartPlusFill } from "react-icons/bs";

import './itemCard.scss';

const gidrotsikl = [gidrotsikl1, gidrotsikl2, gidrotsikl3, gidrotsikl4, gidrotsikl5, gidrotsikl6, gidrotsikl7, gidrotsikl8, gidrotsikl9, gidrotsikl10, gidrotsikl11, gidrotsikl12];

const ItemCard = (props: {index: number}) => {
  return (
    <div className="item-card" >
      <i><Heart style={{width: 24, height: 29, cursor: "pointer"}}/></i>
      <img src={gidrotsikl[props.index]} alt="gidrotsikl" />
      <h3>{cardsGoods[props.index].title}</h3>
      {
        cardsGoods[props.index].available ? <h3>not available</h3> : <h3>{cardsGoods[props.index].price} $</h3> 
      }
      <button><BsFillCartPlusFill style={{width: 35, height: 30}}/></button>
    </div>
  )
}
export default ItemCard;