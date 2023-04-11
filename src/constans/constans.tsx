import { Icard, IstateForm } from '../types/interfaces';

import * as er from '../types/enums';

export const searchGoods: Icard[] = [];

export const initialFormState: IstateForm = {
  title: '',
  price: '',
  date: new Date(),
  available: false,
  img: '',
  checkbox: {
    backpack: false,
    audioSystem: false,
    vest: false,
  },
  description: '',
  titleDirty: false,
  priceDirty: false,
  descriptionDirty: false,
  radioDirty: false,
  errorTitle: er.ErrorText.title,
  errorDescription: er.ErrorText.description,
  errorPrice: er.ErrorText.price,
  id: String(Math.random() * 10),
};
