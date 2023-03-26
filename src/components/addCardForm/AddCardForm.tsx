
import * as React from 'react';
import { Icard } from 'types/interfaces';
import { formGoods } from '../../constans/constans'
import './AddCardForm.scss';
import Cards from '../cards/Cards'


class AddCardForm extends React.Component {
  state: Icard = {
    title: '',
    price: 0,
    date: new Date, 
    available: false,
    img: '',
    checkbox: {
      backpack: false,
      audioSystem: false,
      vest: false
    },
    description: '' 
  }

  onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: {value: string},
      price: {value: string},
      description: {value: string},
      date: {value: Date}
    };
    const title = target.title.value;
    const description = target.description.value;
    const price = target.price.value;
    const date = target.date.value;
    
    this.setState(() => ({
        title,
        price,
        description,
        date
    }))
  
  }
  componentDidUpdate(): void {
    if (this.state.price !== 0)
    formGoods.push(this.state)
  }
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({
      available: event.target.value == 'no' ? true : false
    }))
  }

  onChengeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target: string = event.target.name;
    this.setState(() => ({
      checkbox:{
        backpack: target === 'backpack' ? !this.state.checkbox?.backpack : this.state.checkbox?.backpack ,
        audioSystem: target === 'audioSystem' ? !this.state.checkbox?.audioSystem : this.state.checkbox?.audioSystem,
        vest: target === 'vest' ? !this.state.checkbox?.vest : this.state.checkbox?.vest
      }
    }))
  }

  render(): React.ReactNode {

    return (
      <>
          <form className="add-card-form" 
        onSubmit={this.onSubmit}>
        <h2>Add Card Form</h2>
        <input type="text" placeholder='title' name='title' />
        <input type="text" placeholder='price' name='price' />
        <input type="checkbox" name='backpack' id='backpack' onChange={this.onChengeCheckbox}/>
        <label htmlFor='backpack'>backpack</label>
        <input type="checkbox"  name='audioSystem' id='audioSystem' onChange={this.onChengeCheckbox}/>
        <label htmlFor='audioSystem'>audio system</label>
        <input type="checkbox"  name='vest' id='vest' onChange={this.onChengeCheckbox}/>
        <label htmlFor='vest'>vest</label>
        <input type="texteria" placeholder='description' name='description' />
        <input type="date" placeholder='date' name='date' />
        <div>
          <h4>Available</h4>
          <div className="radio-buttons">
            <input type="radio" 
            id='yes' 
            name='radio'
            value='yes' 
            onChange={this.onChange}/>
          <label htmlFor="yes">Yes</label>
          <input type="radio" 
            id='no' 
            name='radio'
            value='no' 
            onChange={this.onChange}/>
          <label htmlFor="no">No</label>
        </div>
        
        </div>
        <button type='submit'>
        submit
        </button>
      </form>
      <Cards data={'form'} />
      </>
    )
  }
}

export default AddCardForm;