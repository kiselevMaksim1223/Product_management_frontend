import { FC } from 'react';

interface IPaginationProps {
  currentPage: number;
  productsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  productsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxVisiblePages = 5;
  const halfVisiblePages = Math.floor(maxVisiblePages / 2);

  const visiblePageNumbers = [];
  let startPage = currentPage - halfVisiblePages;
  let endPage = currentPage + halfVisiblePages;

  if (startPage < 1) {
    endPage += 1 - startPage;
    startPage = 1;
  }

  if (endPage > pageNumbers.length) {
    startPage -= endPage - pageNumbers.length;
    endPage = pageNumbers.length;
  }

  if (startPage < 1) {
    startPage = 1;
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex gap-2">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className="px-2 py-1 box-border border-2 text-blue-500 border-blue-200 disabled:text-gray-400"
          >
            Prev
          </button>
        </li>

        {visiblePageNumbers.map((number) => (
          <li
            key={number}
            className={`px-2 py-1 box-border border-2 ${
              number === currentPage ? 'text-blue-500 border-blue-200' : ''
            }`}
          >
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}

        <li>
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={() => paginate(currentPage + 1)}
            className="px-2 py-1 box-border border-2 text-blue-500 border-blue-200 disabled:text-gray-400"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
