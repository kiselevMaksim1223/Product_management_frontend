import { put } from 'redux-saga/effects';

import { getProductsApi } from '../../../api/getProductsApi';
import { setLoading } from '../AppSlice/slice';
import { setProducts } from './slice';

export function* getProductsSaga(): any {
  const response = yield getProductsApi();
  if (!response.ok) {
    yield put(setLoading(false));
    throw new Error('Something went wrong!');
  }
  const payload = yield response.json();
  yield put(setProducts(payload));
  yield put(setLoading(false));
}
