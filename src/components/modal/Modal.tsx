import React from 'react';
import { BiX } from 'react-icons/bi';
import { Icard } from '../../types/interfaces';

interface IpropsModal {
  visibleModal: () => void;
  card: Icard;
}

export default function Modal({ card, visibleModal }: IpropsModal) {
  console.log(card.rating?.rate, card);
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
        onClick={() => visibleModal()}
        aria-hidden="true"
      />
      <div className="w-[580px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <button type="button" onClick={() => visibleModal()} className="absolute top-0 right-0">
          <BiX />
        </button>
        <h2>{card.title}</h2>
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
          <img src={card.image} alt={card.title} className="w-1/6" />
          <p className="font-bold">{card.price} $</p>
          <div>
            <p>{card.description}</p>
            <p>
              Rate: <span style={{ fontWeight: 'bold' }}>{card.rating?.rate}</span>
            </p>
            <p>
              Count: <span style={{ fontWeight: 'bold' }}>{card.rating?.count}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
