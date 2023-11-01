import { useEffect } from 'react';

import { useAppDispatch } from '../common/hooks/useAppDispatch';
import { useAppSelector } from '../common/hooks/useAppSelector';
import FiltersPanel from '../components/FiltersPanel/FiltersPanel';
import TableWithPagination from '../components/TableWithPagination/TableWithPagination';
import { getProducts } from '../store/reducers/ProductsSlice/slice';
import Spinner from '../ui-kit/Spinner/Spinner';

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="h-screen bg-gray-100">
      <div className="container mx-auto p-5 max-w-5xl">
        <h1 className="text-3xl font-bold mb-3">Your products</h1>
        <FiltersPanel />
        <TableWithPagination />
      </div>
    </div>
  );
}

export default App;
