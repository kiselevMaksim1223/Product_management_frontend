import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
};

const appSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;
export const appReducer = appSlice.reducer;
