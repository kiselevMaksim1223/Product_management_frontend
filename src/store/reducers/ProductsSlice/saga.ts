import { put } from "redux-saga/effects";
import { setProducts } from "./slice";
import { getProductsApi } from "../../../api/getProductsApi";

export function* getProductsSaga(): any {
    const payload = yield getProductsApi().then((response) => response.json());
  
    yield put(setProducts(payload));
  }

  