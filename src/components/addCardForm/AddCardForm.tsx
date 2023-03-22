
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icard } from 'types/interfaces';
import './AddCardForm.scss';
import { cardsGoods } from '../../constans/constans';

class AddCardForm extends React.Component {
  state: Icard = {
    title: '',
    price: 0, 
    available: false 
  }
  onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: {value: string},
      price: {value: string},
    };
    const myTitle = target.title.value;
    const myPrice = target.price.value;
    
    this.setState(() => ({
        title: myTitle,
        price: myPrice
    }))
  }
  componentDidUpdate(): void {
    if (this.state.price !== 0)
    cardsGoods.push(this.state)
  }
  onChange = (event: any) => {
    this.setState(() => ({available: event.target.value ? false : true}))
  }

  render(): React.ReactNode {
    return (
      <form className="add-card-form" 
        onSubmit={this.onSubmit}>
        <h2>Add Card Form</h2>
        <input type="text" placeholder='title' name='title' />
        <input type="text" placeholder='price' name='price' />
        <input type="radio" 
          id='available' 
          name='available' 
          onChange={this.onChange}/>
        <label htmlFor="available">available</label>
        <button type='submit'>
        <Link to={'/'}>submit</Link>
        </button>
      </form>
    )
  }
}

export default AddCardForm;