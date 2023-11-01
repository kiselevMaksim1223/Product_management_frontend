import { useState } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

import { useAppSelector } from '../../hooks/useAppSelector';
import { uniqueCategoryValues } from './helpers/uniqueCategoryValues';

const Select = () => {
  const products = useAppSelector((state) => state.products.products);
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const categories = uniqueCategoryValues(products);

  return (
    <div className="w-72 font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full shadow p-2 flex items-center justify-between rounded ${
          !selected && 'text-gray-700'
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + '...'
            : selected
          : 'Выберете категорию'}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>
      <ul
        className={`absolute bg-white w-72 mt-2  ${
          open && 'shadow border-2 border-gray-200'
        } overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'} `}
      >
        {/* <div className="flex items-center px-2 sticky top-0 bg-white"> */}
        {/* <AiOutlineSearch size={18} className="text-gray-700" /> */}
        {/* <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          /> */}
        {/* </div> */}
        {categories?.map((category, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${category?.toLowerCase() === selected?.toLowerCase() && 'bg-gray-300'}
            `}
            onClick={() => {
              if (category?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(category);
                setOpen(false);
                // setInputValue('');
              }
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
