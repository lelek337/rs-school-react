import * as React from 'react';
import { IstateForm } from '../../types/interfaces';
import * as er from '../../types/enums';
import { formGoods, initialFormState } from '../../constans/constans';
import Cards from '../cards/Cards';

import './AddCardForm.scss';

function AddCardForm() {
  const [stateForm, setStateForm] = React.useState(initialFormState);

  const onSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    formGoods.push(initialFormState);
    setStateForm(initialFormState);
  };

  const formChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    const { value } = event.target;
    setStateForm({
      ...stateForm,
      [name]: value,
    });
    if (value !== '') {
      switch (name) {
        case 'title':
          setStateForm({ ...stateForm, errorTitle: '' });
          break;
        case 'price':
          if (Number(value)) {
            setStateForm({ ...stateForm, errorPrice: '' });
          } else {
            setStateForm({ ...stateForm, errorPrice: er.ErrorText.priceNoNumber });
          }
          break;
        case 'description':
          setStateForm({ ...stateForm, errorDescription: '' });
          break;
        default:
        // do nothing
      }
    }
  };

  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateForm({
      ...stateForm,
      available: event.target.value === 'no',
    });
  };

  const onChengeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target: string = event.target.name;
    const { checkbox } = stateForm;
    setStateForm({
      ...stateForm,
      checkbox: {
        backpack: target === 'backpack' ? !checkbox?.backpack : checkbox?.backpack,
        audioSystem: target === 'audioSystem' ? !checkbox?.audioSystem : checkbox?.audioSystem,
        vest: target === 'vest' ? !checkbox?.vest : checkbox?.vest,
      },
    });
  };

  const blurHundler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'title':
        setStateForm(() => ({ ...stateForm, titleDirty: true }));
        break;
      case 'price':
        setStateForm(() => ({ ...stateForm, priceDirty: true }));
        break;
      case 'description':
        setStateForm(() => ({ ...stateForm, descriptionDirty: true }));
        break;
      default:
      // do nothing
    }
  };

  const { titleDirty, priceDirty, descriptionDirty, errorTitle, errorPrice, errorDescription } =
    stateForm;

  return (
    <>
      <form className="add-card-form" onSubmit={onSubmit}>
        <h2>Add Card Form</h2>
        {titleDirty && <div style={{ color: 'red' }}>{errorTitle}</div>}
        <input
          onBlur={blurHundler}
          type="text"
          placeholder="title"
          name="title"
          onChange={formChangeHandler}
        />
        {priceDirty && <div style={{ color: 'red' }}>{errorPrice}</div>}
        <input
          onBlur={blurHundler}
          type="text"
          placeholder="price"
          name="price"
          onChange={formChangeHandler}
        />
        <input type="checkbox" name="backpack" id="backpack" onChange={onChengeCheckbox} />
        <label htmlFor="backpack">backpack</label>
        <input type="checkbox" name="audioSystem" id="audioSystem" onChange={onChengeCheckbox} />
        <label htmlFor="audioSystem">audio system</label>
        <input type="checkbox" name="vest" id="vest" onChange={onChengeCheckbox} />
        <label htmlFor="vest">vest</label>
        {descriptionDirty && <div style={{ color: 'red' }}>{errorDescription}</div>}
        <textarea
          onBlur={blurHundler}
          placeholder="description"
          name="description"
          onChange={formChangeHandler}
        />
        <input type="date" placeholder="date" name="date" onChange={formChangeHandler} />
        <div>
          <h4>Available</h4>
          <div className="radio-buttons">
            <input type="radio" id="yes" name="radio" value="yes" onChange={onChangeRadio} />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="radio" value="no" onChange={onChangeRadio} />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
      <Cards data="form" />
    </>
  );
}

export default AddCardForm;
