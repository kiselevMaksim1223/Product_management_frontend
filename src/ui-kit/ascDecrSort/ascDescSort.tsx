import { MdOutlineSort } from 'react-icons/md';
import { RiSortAsc, RiSortDesc } from 'react-icons/ri';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { setSort } from '../../store/reducers/FiltersSlice/slice';

const AscDescSort = () => {
  const sort = useAppSelector((state) => state.filters.sort);
  const dispatch = useAppDispatch();

  const sortByHandler = () => {
    if (sort === 'asc') {
      dispatch(setSort('desc'));
    }
    if (sort === 'desc') {
      dispatch(setSort(''));
    }
    if (sort === '') {
      dispatch(setSort('asc'));
    }
  };

  return (
    <div onClick={sortByHandler} className="cursor-pointer">
      {sort === 'asc' ? (
        <RiSortAsc size={20} />
      ) : sort === 'desc' ? (
        <RiSortDesc size={20} />
      ) : (
        <MdOutlineSort size={20} />
      )}
    </div>
  );
};

export default AscDescSort;
