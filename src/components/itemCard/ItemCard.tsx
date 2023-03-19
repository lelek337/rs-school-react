import React, { Component } from "react";
import { cardsGoods } from "../../constans/constans";
import { BsFillBalloonHeartFill as Heart, BsFillCartPlusFill } from "react-icons/bs";
import { IpropCard } from "types/interfaces";

import './itemCard.scss';

class ItemCard extends Component<IpropCard> {
  constructor(props: IpropCard) {
    super(props)
  }
  
  render(): React.ReactNode {
    // console.log(this.props.newCardsGoods[2])
    return (
      <div className="item-card" >
        <i><Heart style={{width: 24, height: 29, cursor: "pointer"}}/></i>
        <img src={this.props.newCardsGoods[this.props.index].img} alt="gidrotsikl" />
        <h3>{this.props.newCardsGoods[this.props.index].title}</h3>
        {
          this.props.newCardsGoods[this.props.index].available ? <h3>not available</h3> : <h3>{this.props.newCardsGoods[this.props.index].price} $</h3> 
        }
        <button><BsFillCartPlusFill style={{width: 35, height: 30}}/></button>
      </div>
    )
  }
  
}
export default ItemCard;