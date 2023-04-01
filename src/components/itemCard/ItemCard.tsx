import React from 'react';
import { BsFillBalloonHeartFill as Heart, BsFillCartPlusFill } from 'react-icons/bs';
import { IpropCard } from '../../types/interfaces';
import { audioSystem, backpack, vest, gidrotsikl7 } from '../../assets/jpg';

import './itemCard.scss';

function ItemCard(props: IpropCard) {
  const newProps = props.newCardsGoods[props.index];
  const newBackpack = newProps.checkbox?.backpack;
  const newVest = newProps.checkbox?.vest;
  const newAudioSystem = newProps.checkbox?.audioSystem;
  const newDate = String(newProps.date);
  const newAvialable = newProps.available;
  const newImg = newProps.img ? newProps.img : gidrotsikl7;

  return (
    <div className="item-card">
      <i>
        <Heart style={{ width: 24, height: 29, cursor: 'pointer' }} />
      </i>
      <img src={newImg} alt="gidrotsikl" />
      <h3>{props.newCardsGoods[props.index].title}</h3>
      {newAvialable ? <h3>not available</h3> : <h3>{newProps.price} $</h3>}
      <p>{newDate}</p>
      <div className="item-card-footer">
        <img
          src={backpack}
          alt="backpack"
          style={{
            width: 39,
            height: newBackpack ? 34 : 0,
            cursor: 'pointer',
          }}
        />
        <img
          src={vest}
          alt="life vest"
          style={{ width: 39, height: newVest ? 34 : 0, cursor: 'pointer' }}
        />
        <img
          src={audioSystem}
          alt="audio system"
          style={{
            width: 39,
            height: newAudioSystem ? 34 : 0,
            cursor: 'pointer',
          }}
        />
        <button type="button">
          <BsFillCartPlusFill style={{ width: 35, height: 30 }} />
        </button>
      </div>
    </div>
  );
}
export default ItemCard;
