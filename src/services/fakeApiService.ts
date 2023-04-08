import axios from 'axios';
import { Icard } from '../types/interfaces';

const fakeApiService = async () => {
  const response = await axios.get<Icard[]>('https://fakestoreapi.com/products?limit=12');
  return response.data;
};

export default fakeApiService;
