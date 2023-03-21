
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icard } from 'types/interfaces';
import './AddCardForm.scss';
import { cardsGoods } from '../../constans/constans';

class AddCardForm extends React.Component {
  state: Icard = {
    title: '',
    price: '', 
    available: false, 
  }
  onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: {value: string},
      price: {value: string},
      avialable: {value: boolean}
    };
    const title = target.title.value;
    const price = target.price.value;
    const avialable = target.avialable.value;
    console.log('avialable:', avialable)
    
    this.setState(() => {
      title: title;
      price: price;
      avialable: avialable;
    })
    
    cardsGoods.push(this.state)
    console.log('cardsGoods:', cardsGoods, 'state:', this.state)
  }
  onChange = (event: any) => {
    console.log(event.target.value)
  }

  render(): React.ReactNode {
    return (
      <form className="add-card-form"
        // ref={formRef} 
        onSubmit={this.onSubmit}>
        <h2>Add Card Form</h2>
        <input type="text" placeholder='title' name='title' />
        <input type="text" placeholder='price' name='price' />
        <input type="radio" 
          id='available' 
          name='available'
          // value='1'
          checked={this.state.available === true? false: true} 
          onChange={this.onChange}/>
        <label htmlFor="available">available</label>
        <button type='submit'>submit<Link to={'/'}/></button>
      </form>
    )
  }
}

export default AddCardForm;