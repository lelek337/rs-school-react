import * as React from "react";
import ItemCard from "../itemCard/ItemCard";
import { Icard } from "types/interfaces";
import { cardsGoods, formGoods } from '../../constans/constans';

import './cards.scss';

class Cards extends React.Component<{ data: string }, {goods: Icard[]}> {
  constructor(props: { data: string }){
    super(props);

    this.state = {
      goods: props.data === 'cards' ? cardsGoods : formGoods
    }
  }

  componentDidMount() {
    const localStorageValue = localStorage.getItem('searchValue');
    const {goods}  = this.state
    if (localStorageValue) {
      this.setState(() => ({goods: goods.filter(elem => elem.title.includes(localStorageValue!))})
        )
    }
    return
  }
  
  render() {
    const {goods} = this.state
    return (
      <div className="cards">
        {
          goods.map((el, i) => <ItemCard index={i} key={i} newCardsGoods={goods}/>)
        }
        
      </div>
    )
  }
}

export default Cards;