import { ChangeEvent } from 'react';

import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { setCategory, setSearch } from '../../store/reducers/FiltersSlice/slice';
import { uniqueCategoryValues } from '../../ui-kit/Select/helpers/uniqueCategoryValues';
import Select from '../../ui-kit/Select/Select';

const FiltersPanel = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.filters.selectedCategory);
  const unfilteredProducts = useAppSelector((state) => state.products.products);
  const search = useAppSelector((state) => state.filters.search);
  const categories = uniqueCategoryValues(unfilteredProducts);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const setSelectedCategoryHandler = (category: string) => {
    dispatch(setCategory(category));
  };
  return (
    <div className="mb-5 flex flex-col gap-2 justify-between sm:flex-row">
      <input
        placeholder="Введите название товара"
        className="flex-1 border border-gray-200 px-2 shadow p-[7px] focus:outline-none focus:border-blue-500 hover:bg-gray-200"
        value={search || ''}
        onChange={handleSearch}
      />
      <Select
        defaultValue="Все категории"
        menuItems={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategoryHandler}
      />
    </div>
  );
};

export default FiltersPanel;
