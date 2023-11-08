import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type sortType = 'asc' | 'desc' | '';

interface IFilterState {
  selectedCategory: string;
  search: string;
  sort: sortType;
  currentPage: number;
}

const initialState: IFilterState = {
  selectedCategory: 'Все категории',
  search: '',
  sort: '',
  currentPage: 1,
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
    setCurrentPage(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.currentPage = action.payload;
      }
    },
  },
});

export const { setCategory, setSearch, setSort, setCurrentPage } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
