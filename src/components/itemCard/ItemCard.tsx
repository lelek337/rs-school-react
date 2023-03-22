import React, { Component } from "react";
import { BsFillBalloonHeartFill as Heart, BsFillCartPlusFill } from "react-icons/bs";
import { IpropCard } from "types/interfaces";

import './itemCard.scss';
class ItemCard extends Component<IpropCard> {
  constructor(props: IpropCard) {
    super(props)
  }
  
  render(): React.ReactNode {
    const index = this.props.index < 12 ? this.props.index : 7;
    return (
      <div className="item-card" >
        <i><Heart style={{width: 24, height: 29, cursor: "pointer"}}/></i>
        <img src={this.props.newCardsGoods[index].img} alt="gidrotsikl" />
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