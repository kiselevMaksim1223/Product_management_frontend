import { sortType } from '../../../store/reducers/FiltersSlice/slice';
import { IProduct } from '../../../store/reducers/ProductsSlice/slice';

export const sortProductsByPrice = (products: Array<IProduct>, sortBy: sortType) => {
  if (sortBy === 'asc') {
    return [...products].sort((a, b) => a.price - b.price);
  }
  if (sortBy === 'desc') {
    return [...products].sort((a, b) => b.price - a.price);
  }
  return [...products];
};
