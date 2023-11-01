import { IProduct } from '../../../store/reducers/ProductsSlice/slice';

export const filterProductsBySearch = (products: Array<IProduct>, search: string) => {
  return products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
};
