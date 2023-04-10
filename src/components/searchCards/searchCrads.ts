import fakeApiService from '../../services/fakeApiService';
import { searchGoods } from '../../constans/constans';

export default async function searchCards(data: string) {
  const apiService = await fakeApiService();
  const searchProducts = apiService.filter((el) => el.title.includes(data));
  searchProducts.forEach((elem) => searchGoods.push(elem));
}
