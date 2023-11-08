import { setCurrentPage } from '../../store/reducers/FiltersSlice/slice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const usePagination = (productsPerPage: number) => {
  const currentPage = useAppSelector((state) => state.filters.currentPage);
  const dispatch = useAppDispatch();

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const paginate = (pageNumber: number) => dispatch(setCurrentPage(pageNumber));

  return {
    currentPage,
    indexOfFirstProduct,
    indexOfLastProduct,
    productsPerPage,
    paginate,
  };
};
