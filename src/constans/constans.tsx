import { Icard, IstateForm } from '../types/interfaces';
import {
  gidrotsikl1,
  gidrotsikl10,
  gidrotsikl11,
  gidrotsikl12,
  gidrotsikl2,
  gidrotsikl3,
  gidrotsikl4,
  gidrotsikl5,
  gidrotsikl6,
  gidrotsikl7,
  gidrotsikl8,
  gidrotsikl9,
} from '../assets/jpg';

import * as er from '../types/enums';

export const formGoods: Icard[] = [];

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

export const cardsGoods: Icard[] = [
  {
    title: 'Gidrotsikl BRP SeaDoo GTI 130hp SE BlackMango',
    price: '1300',
    available: false,
    img: gidrotsikl1,
    id: '0',
  },
  {
    title: 'Gidrotsikl BRP SeaDoo GTI 155hp SE Long Blue Metallic',
    price: '1320',
    available: false,
    img: gidrotsikl2,
    id: '1',
  },
  {
    title: 'Gidrotsikl BRP SeaDoo GTR 230hp X California green ',
    price: '1400',
    available: true,
    img: gidrotsikl3,
    id: '2',
  },
  {
    title: 'Gidrotsikl BRP SeaDoo GTR 230hp STD Black / Gulfstream',
    price: '1470',
    available: false,
    img: gidrotsikl4,
    id: '3',
  },
  {
    title: 'Gidrotsikl BRP SeaDoo GTX 300hp LTD Liquid Metal',
    price: '1510',
    available: false,
    img: gidrotsikl5,
    id: '4',
  },
  {
    title: 'Gidrotsikl Spark 2-UP 900 Ho Ace Chili Pepper',
    price: '910',
    available: false,
    img: gidrotsikl6,
    id: '5',
  },
  {
    title: 'Gidrotsikl BRP SeaDoo Spark 60hp 2 up',
    price: '900',
    available: false,
    img: gidrotsikl7,
    id: '6',
  },
  {
    title: 'Gidrotsikl BRP SeaDoo Spark GTS 90hp Rental',
    price: '970',
    available: false,
    img: gidrotsikl8,
    id: '7',
  },
  {
    title: 'Gidrotsikl BRP SeaDoo WAKE 230hp PRO Teal blue',
    price: '1120',
    available: false,
    img: gidrotsikl9,
    id: '8',
  },
  {
    title: 'Gidrotsikl Spark 2-UP 900 Ho Ace Chili Pepper',
    price: '830',
    available: false,
    img: gidrotsikl10,
    id: '9',
  },
  {
    title: 'Gidrotsikl Spark 2-UP 900 Ho Ace Pineapple',
    price: '830',
    available: true,
    img: gidrotsikl11,
    id: '10',
  },
  {
    title: 'Gidrotsikl Spark 3-UP 900 HO Ace IBR Blueberry',
    price: '830',
    available: false,
    img: gidrotsikl12,
    id: '11',
  },
];
