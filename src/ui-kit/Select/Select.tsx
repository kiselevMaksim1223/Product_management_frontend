import { FC, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface ISelectProps {
  defaultValue: string;
  menuItems: Array<string>;
  selected: string;
  setSelected: (category: string) => void;
}

const Select: FC<ISelectProps> = ({ defaultValue, menuItems, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

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
          : defaultValue}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>

      <ul
        className={`absolute bg-white w-72 mt-2  ${
          open && 'shadow border-2 border-gray-200'
        } overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'} `}
      >
        {menuItems?.map((menuItem, index) => (
          <li
            key={index}
            className={`p-2 text-sm hover:bg-blue-500 hover:text-white
            ${menuItem?.toLowerCase() === selected?.toLowerCase() && 'bg-gray-300'}
            `}
            onClick={() => {
              if (menuItem?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(menuItem);
                setOpen(false);
              }
            }}
          >
            {menuItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
