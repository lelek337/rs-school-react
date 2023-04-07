import * as React from 'react';
import axios from 'axios';
import { Icard } from 'types/interfaces';
import ItemCard from '../itemCard/ItemCard';
import Spinner from '../spinner/Spinner';

import './cards.scss';

function Cards() {
  const [products, setProducts] = React.useState<Icard[]>([]);
  const [loading, setLoading] = React.useState(false);

  async function fetchCards() {
    setLoading(true);
    const response = await axios.get<Icard[]>('https://fakestoreapi.com/products?limit=12');
    setProducts(response.data);
    setLoading(false);
  }

  React.useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      {loading ? <Spinner /> : null}
      <div className="cards">
        {products.map((el) => (
          <ItemCard key={el.id} card={el} />
        ))}
      </div>
    </>
  );
}

export default Cards;
