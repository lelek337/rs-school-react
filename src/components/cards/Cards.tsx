import * as React from 'react';
import { Icard } from 'types/interfaces';
import ItemCard from '../itemCard/ItemCard';
import { cardsGoods, formGoods } from '../../constans/constans';

import './cards.scss';

class Cards extends React.Component<{ data: string }, { goods: Icard[] }> {
  constructor(props: { data: string }) {
    super(props);

    this.state = {
      goods: props.data === 'cards' ? cardsGoods : formGoods,
    };
  }

  componentDidMount() {
    const localStorageValue = localStorage.getItem('searchValue');
    const { goods } = this.state;
    if (localStorageValue) {
      this.setState(() => ({
        goods: goods.filter((elem) => elem.title.includes(localStorageValue)),
      }));
    }
  }

  render() {
    const { goods } = this.state;
    return (
      <div className="cards">
        {goods.map((el, i) => (
          <ItemCard index={i} key={el.id} newCardsGoods={goods} />
        ))}
      </div>
    );
  }
}

export default Cards;
