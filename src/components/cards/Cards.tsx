import * as React from 'react';
import { Icard } from 'types/interfaces';
import ItemCard from '../itemCard/ItemCard';
import { cardsGoods, formGoods } from '../../constans/constans';

import './cards.scss';

function Cards(props: { data: string }) {
  const newProps: Icard[] = props.data === 'cards' ? cardsGoods : formGoods;
  const [goods, setGoods] = React.useState(newProps);

  const localStorageValue = localStorage.getItem('searchValue');
  if (localStorageValue) {
    setGoods(goods.filter((elem) => elem.title.includes(localStorageValue)));
  }

  return (
    <div className="cards">
      {goods.map((el, i) => (
        <ItemCard index={i} key={el.id} newCardsGoods={goods} />
      ))}
    </div>
  );
}

export default Cards;
