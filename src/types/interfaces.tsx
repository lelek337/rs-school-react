
export interface Icard {
  title: string;
  price: number;
  available: boolean;
  img?: string;
  date?: Date;
  checkbox?: {
    backpack: boolean,
    vest: boolean,
    audioSystem: boolean
  };
  description?: string;
}

export interface IpropCard {
  index: number;
  newCardsGoods: Icard[];
}




