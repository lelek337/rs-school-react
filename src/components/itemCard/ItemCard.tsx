import React, { Component } from "react";
import { BsFillBalloonHeartFill as Heart, BsFillCartPlusFill } from "react-icons/bs";
import { IpropCard } from "types/interfaces";
import { audioSystem, backpack, vest, gidrotsikl7 } from "../../assets/jpg";

import './itemCard.scss';
class ItemCard extends Component<IpropCard> {
  constructor(props: IpropCard) {
    super(props)
  }
  
  render(): React.ReactNode {
    const props = this.props.newCardsGoods[this.props.index]
    const index = this.props.index < 12 ? this.props.index : 7;
    const newBackpack = props.checkbox?.backpack;
    const newVest = props.checkbox?.vest;
    const newAudioSystem = props.checkbox?.audioSystem;
    const newDate:any = props.date;
    const newAvialable = props.available;
    const newImg = props.img ? props.img : gidrotsikl7

    return (
      <div className="item-card" >
        <i><Heart style={{width: 24, height: 29, cursor: "pointer" }}/></i>
        <img src={newImg} alt="gidrotsikl" />
        <h3>{this.props.newCardsGoods[this.props.index].title}</h3>
        {
          newAvialable ? <h3>not available</h3> : <h3>{props.price} $</h3> 
        }
        <p>{newDate}</p>
        <div className="item-card-footer">
          <img src={backpack} alt="backpack" 
            style={{width: 39, height: newBackpack ? 34 : 0,  cursor: "pointer"}} />
          <img src={vest} alt="life vest" 
            style={{width: 39, height: newVest ? 34 : 0, cursor: "pointer"}} />
          <img src={audioSystem} alt="audio system" 
            style={{width: 39, height: newAudioSystem ? 34 : 0, cursor: "pointer"}} />
          <button><BsFillCartPlusFill style={{width: 35, height: 30}}/></button>
        </div>
        
      </div>
    )
  }
  
}
export default ItemCard;