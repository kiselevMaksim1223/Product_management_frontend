import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import { appReducer } from './reducers/AppSlice/slice';
import { filtersReducer } from './reducers/FiltersSlice/slice';
import { getProductsSaga } from './reducers/ProductsSlice/saga';
import { GET_PRODUCTS, productsReducer } from './reducers/ProductsSlice/slice';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
}

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appReducer,
    products: productsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
