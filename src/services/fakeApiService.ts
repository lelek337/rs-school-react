import axios from 'axios';
import { Icard } from '../types/interfaces';

const fakeApiService = async () => {
  const response = await axios.get<Icard[]>('https://fakestoreapi.com/products');
  return response.data;
};

export default fakeApiService;
