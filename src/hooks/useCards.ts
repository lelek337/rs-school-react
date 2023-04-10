import React from 'react';
import { AxiosError } from 'axios';
import { Icard } from 'types/interfaces';
import fakeApiService from '../services/fakeApiService';
import { searchGoods } from '../constans/constans';

export default function useCards() {
  const [products, setProducts] = React.useState<Icard[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  async function fetchCards() {
    try {
      setError('');
      setLoading(true);
      const apiService = await fakeApiService();
      const searchProducts = searchGoods.length > 0 ? searchGoods : apiService;
      setProducts(searchProducts);
      setLoading(false);
    } catch (e: unknown) {
      const newError = e as AxiosError;
      setLoading(false);
      setError(newError.message);
    }
  }

  React.useEffect(() => {
    fetchCards();
  }, []);

  return { products, loading, error };
}
