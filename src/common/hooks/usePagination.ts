import { useState } from 'react';

export const usePagination = (productsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    currentPage,
    indexOfFirstProduct,
    indexOfLastProduct,
    productsPerPage,
    paginate,
  };
};
