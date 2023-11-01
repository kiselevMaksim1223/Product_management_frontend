import { FC } from 'react';

import { useAppSelector } from '../../common/hooks/useAppSelector';
import { usePagination } from '../../common/hooks/usePagination';
import { IProduct } from '../../store/reducers/ProductsSlice/slice';
import Pagination from '../../ui-kit/Pagination/Pagination';
import Table from '../../ui-kit/Table/Table';
import { filterProductsBySearch } from './helpers/filterProductsBySearch';
import { sortProductsByPrice } from './helpers/sortProductsByPrice';

const TableWithPagination: FC = () => {
  const headCols = [
    { id: 'name', label: 'Название', sort: false },
    { id: 'price', label: 'Цена', sort: true },
    { id: 'category', label: 'Категория', sort: false },
  ];
  const productsPerPage = 5;
  const selectedCategory = useAppSelector((state) => state.filters.selectedCategory);
  const unfilteredProducts = useAppSelector((state) => state.products.products);
  const filteredProducts = useAppSelector((state) => state.products.filteredProducts);
  const search = useAppSelector((state) => state.filters.search);
  const sort = useAppSelector((state) => state.filters.sort);

  const { currentPage, indexOfFirstProduct, indexOfLastProduct, paginate } =
    usePagination(productsPerPage);

  let products: Array<IProduct>;
  if (selectedCategory === 'Все категории') {
    products = unfilteredProducts;
  } else {
    products = filteredProducts;
  }

  // search implementation
  if (search) {
    products = filterProductsBySearch(products, search);
  }

  // sort implementation
  products = sortProductsByPrice(products, sort);

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <Table headCols={headCols} bodyRows={currentProducts} />
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        productsPerPage={productsPerPage}
        totalPosts={products.length}
      />
    </>
  );
};

export default TableWithPagination;
