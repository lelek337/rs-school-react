import * as React from 'react';

import ItemCard from '../itemCard/ItemCard';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMassege';
import './cards.scss';
import useCards from '../../hooks/useCards';

function Cards() {
  const { loading, error, products } = useCards();

  return (
    <div className="flex flex-col items-center mb-2">
      {loading ? <Spinner /> : null}
      {error ? <ErrorMessage error={error} /> : null}
      <div className="cards">
        {products.map((el) => (
          <ItemCard key={el.id} card={el} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
