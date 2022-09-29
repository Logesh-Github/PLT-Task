import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  TOGGLE_LOADER,
  ADD_PRODUCT_TO_CART,
} from '../types';
import {ActionCreator, Action, Dispatch} from 'redux';
import {ProductsListInterface} from '../reducers/cart.reducer';

interface GetProductSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: ProductsListInterface[];
}

interface GetProductFailAction {
  type: typeof GET_PRODUCTS_FAIL;
}

interface ToggleLoaderAction {
  type: typeof TOGGLE_LOADER;
  payload: boolean;
}

interface AddToCartAction {
  type: typeof ADD_PRODUCT_TO_CART;
  payload: ProductsListInterface;
}

export const toggleLoader: ActionCreator<ToggleLoaderAction> = (
  value: boolean,
) => {
  return {
    type: TOGGLE_LOADER,
    payload: value,
  };
};

export const getProductSuccess: ActionCreator<GetProductSuccessAction> = (
  data: ProductsListInterface[],
) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const getProductFail: ActionCreator<GetProductFailAction> = () => {
  return {
    type: GET_PRODUCTS_FAIL,
  };
};

export const getProducts = () => async (dispatch: Dispatch<any>) => {
  dispatch(toggleLoader(true));
  try {
    const res = await fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/products',
    );
    const data = await res.json();
    dispatch(getProductSuccess(data));
  } catch (error) {
    dispatch(getProductFail());
  }
};

export const addProductToCart: ActionCreator<AddToCartAction> = (
  data: ProductsListInterface,
) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: data,
  };
};
