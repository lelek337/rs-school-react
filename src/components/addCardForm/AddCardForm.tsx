import * as React from 'react';
import { IstateForm } from '../../types/interfaces';
import * as er from '../../types/enums';
import { formGoods, initialFormState } from '../../constans/constans';
import Cards from '../cards/Cards';

import './AddCardForm.scss';

class AddCardForm extends React.Component {
  state: IstateForm = initialFormState;

  onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    formGoods.push(this.state);
    this.setState(initialFormState);
  };

  formChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
    if (value !== '') {
      switch (name) {
        case 'title':
          this.setState(() => ({ errorTitle: '' }));
          break;
        case 'price':
          if (Number(value)) {
            this.setState(() => ({ errorPrice: '' }));
          } else {
            this.setState(() => ({ errorPrice: er.ErrorText.priceNoNumber }));
          }
          break;
        case 'description':
          this.setState(() => ({ errorDescription: '' }));
          break;
        default:
        // do nothing
      }
    }
  };

  onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({
      available: event.target.value === 'no',
    }));
  };

  onChengeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target: string = event.target.name;
    const { checkbox } = this.state;
    this.setState(() => ({
      initialForm: {
        checkbox: {
          backpack: target === 'backpack' ? !checkbox?.backpack : checkbox?.backpack,
          audioSystem: target === 'audioSystem' ? !checkbox?.audioSystem : checkbox?.audioSystem,
          vest: target === 'vest' ? !checkbox?.vest : checkbox?.vest,
        },
      },
    }));
  };

  blurHundler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'title':
        this.setState(() => ({ titleDirty: true }));
        break;
      case 'price':
        this.setState(() => ({ priceDirty: true }));
        break;
      case 'description':
        this.setState(() => ({ descriptionDirty: true }));
        break;
      default:
      // do nothing
    }
  };

  render(): React.ReactNode {
    const { titleDirty, priceDirty, descriptionDirty, errorTitle, errorPrice, errorDescription } =
      this.state;

    return (
      <>
        <form className="add-card-form" onSubmit={this.onSubmit}>
          <h2>Add Card Form</h2>
          {titleDirty && <div style={{ color: 'red' }}>{errorTitle}</div>}
          <input
            onBlur={this.blurHundler}
            type="text"
            placeholder="title"
            name="title"
            onChange={this.formChangeHandler}
          />
          {priceDirty && <div style={{ color: 'red' }}>{errorPrice}</div>}
          <input
            onBlur={this.blurHundler}
            type="text"
            placeholder="price"
            name="price"
            onChange={this.formChangeHandler}
          />
          <input type="checkbox" name="backpack" id="backpack" onChange={this.onChengeCheckbox} />
          <label htmlFor="backpack">backpack</label>
          <input
            type="checkbox"
            name="audioSystem"
            id="audioSystem"
            onChange={this.onChengeCheckbox}
          />
          <label htmlFor="audioSystem">audio system</label>
          <input type="checkbox" name="vest" id="vest" onChange={this.onChengeCheckbox} />
          <label htmlFor="vest">vest</label>
          {descriptionDirty && <div style={{ color: 'red' }}>{errorDescription}</div>}
          <textarea
            onBlur={this.blurHundler}
            placeholder="description"
            name="description"
            onChange={this.formChangeHandler}
          />
          <input type="date" placeholder="date" name="date" onChange={this.formChangeHandler} />
          <div>
            <h4>Available</h4>
            <div className="radio-buttons">
              <input type="radio" id="yes" name="radio" value="yes" onChange={this.onChangeRadio} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="radio" value="no" onChange={this.onChangeRadio} />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
        <Cards data="form" />
      </>
    );
  }
}

export default AddCardForm;
