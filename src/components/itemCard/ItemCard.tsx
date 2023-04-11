import React from 'react';
import { Icard } from '../../types/interfaces';

interface Iprops {
  card: Icard;
  visibleModal: (card?: Icard) => void;
}

function ItemCard({ card, visibleModal }: Iprops) {
  return (
    <div
      className="border py-2 px-4 rounded flex flex-col items-center mb-2"
      onClick={() => visibleModal(card)}
      aria-hidden="true"
    >
      <img src={card.image} alt={card.title} className="w-1/6" />
      <p>{card.title}</p>
      <p className="font-bold">{card.price} $</p>
    </div>
  );
}
export default ItemCard;
