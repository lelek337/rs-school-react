import * as React from 'react';
import ItemCard from '../itemCard/ItemCard';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMassege';
import './cards.scss';
import useCards from '../../hooks/useCards';
import Modal from '../modal/Modal';
import { Icard } from '../../types/interfaces';
import { searchGoods } from '../../constans/constans';

interface IcardProps {
  cardsGoods: Icard[];
}

function Cards({ cardsGoods }: IcardProps) {
  const { loading, error, products } = useCards();
  const [modal, setModal] = React.useState(false);
  const [card, setCard] = React.useState(products[0]);
  const [goods, setGoods] = React.useState(products);

  const onVisibleModal = (specificCard?: Icard) => {
    setModal((prev) => !prev);
    if (specificCard) {
      setCard(specificCard);
    }
  };

  if (cardsGoods.length > 0) {
    setGoods(cardsGoods);
  }

  const prodooctsCards = goods.length > 0 ? goods : products;

  const newProducts = prodooctsCards.filter((el, index) => (index < 12 ? el : null));

  return (
    <div className="flex flex-col items-center mb-2">
      {loading ? <Spinner /> : null}
      {error ? <ErrorMessage error={error} /> : null}
      <div className="cards">
        {newProducts.map((el) => {
          return (
            <ItemCard key={el.id} card={el} visibleModal={(newCard?) => onVisibleModal(newCard)} />
          );
        })}
      </div>
      {modal ? <Modal visibleModal={() => onVisibleModal()} card={card} /> : null}
    </div>
  );
}

export default Cards;
