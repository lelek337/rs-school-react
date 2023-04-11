export interface Icard {
  title: string;
  price: string;
  category: string;
  image: string;
  description?: string;
  id: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IstateForm {
  title: string;
  price: string;
  available: boolean;
  img?: string;
  date: Date;
  checkbox: {
    backpack: boolean;
    vest: boolean;
    audioSystem: boolean;
  };
  description: string;
  titleDirty: boolean;
  priceDirty: boolean;
  descriptionDirty: boolean;
  radioDirty: boolean;
  errorTitle: string;
  errorDescription: string;
  errorPrice: string;
  id: string;
}

export interface IpropCard {
  index: number;
  newCardsGoods: Icard[];
}
