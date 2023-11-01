import { FC } from 'react';

import { IProduct } from '../../store/reducers/ProductsSlice/slice';
import AscDescSort from '../ascDecrSort/ascDescSort';

interface ITableProps {
  headCols: { id: string; label: string; sort: boolean }[];
  bodyRows: IProduct[];
}

const Table: FC<ITableProps> = ({ headCols, bodyRows }) => {
  return (
    <div className="min-h-[270px] overflow-auto rounded-lg px-[20px] mx-[-20px]">
      <table className="w-full shadow">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            {headCols.map((col) => (
              <th
                key={col.id}
                className="p-3 text-sm font-semibold tracking-wide text-left"
              >
                <div className="flex items-center gap-2">
                  <p>{col.label}</p>
                  {col.sort && <AscDescSort />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {bodyRows.map((row) => (
            <tr key={row.id} className="bg-white hover:bg-gray-100">
              <td className="w-3/6 min-w-[150px] p-3 text-sm text-gray-700 whitespace-nowrap">
                {row.name}
              </td>
              <td className="w-2/6 min-w-[150px] p-3 text-sm text-gray-700 whitespace-nowrap">
                {row.price}
              </td>
              <td className="w-2/6 min-w-[150px] p-3 text-sm text-gray-700 whitespace-nowrap">
                {row.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
