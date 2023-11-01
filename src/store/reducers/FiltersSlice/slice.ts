import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type sortType = 'asc' | 'desc' | '';

interface IFilterState {
  selectedCategory: string;
  search: string;
  sort: sortType;
}

const initialState: IFilterState = {
  selectedCategory: 'Все категории',
  search: '',
  sort: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSort(state, action: PayloadAction<sortType>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSearch, setSort } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
