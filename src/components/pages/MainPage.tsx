import React from 'react';
import Search from '../search/Search';
import Cards from '../cards/Cards';
import { Icard } from '../../types/interfaces';

function MainPage() {
  const [cardsGooods, setCardsGood] = React.useState<Icard[]>([]);
  const onCardsGoods = (data: Icard[]) => {
    setCardsGood(data);
  };
  return (
    <>
      <Search onCardsGoods={(data) => onCardsGoods(data)} />
      <Cards cardsGoods={cardsGooods} />
    </>
  );
}

export default MainPage;
