
export interface Icard {
  title: string;
  price: string;
  available: boolean;
  img: string;
}

export interface IpropCard {
  index: number;
  newCardsGoods: Icard[];
}


