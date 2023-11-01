import { IProduct } from '../../../../store/reducers/ProductsSlice/slice';

export const uniqueCategoryValues = (data: Array<IProduct>) => {
  const uniqueCategorySet = new Set<string>();

  data.forEach((product) => {
    uniqueCategorySet.add(product.category);
  });

  const uniqueCategoriesArray = Array.from(uniqueCategorySet);

  return uniqueCategoriesArray;
};
