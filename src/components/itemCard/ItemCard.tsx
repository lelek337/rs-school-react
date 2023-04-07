import React from 'react';
import { Icard } from '../../types/interfaces';

import './itemCard.scss';

interface Iprops {
  card: Icard;
}

function ItemCard({ card }: Iprops) {
  const [details, setDetails] = React.useState(false);

  const btnBgclassname = details ? 'bg-blue-400' : 'bg-green-400';
  const btnClasses = ['ry-2 px-4 border', btnBgclassname];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={card.image} alt={card.title} />
      <p>{card.title}</p>
      <p className="font-bold">{card.price} $</p>
      <button
        type="button"
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>

      {details && (
        <div>
          <p>{card.description}</p>
          <p>
            Rate: <span style={{ fontWeight: 'bold' }}>{card?.raiting?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
export default ItemCard;
