import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  TOGGLE_LOADER,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
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
  payload: {data: ProductsListInterface, productIndex: number};
}

interface DeleteFromCartAction {
  type: typeof DELETE_PRODUCT_FROM_CART;
  payload: {data: ProductsListInterface, productIndex: number};
}

interface IncreaseProductQtyAction {
  type: typeof INCREASE_PRODUCT_QUANTITY;
  payload: {data: ProductsListInterface, productIndex: number};
}

interface DecreaseProductQtyAction {
  type: typeof DECREASE_PRODUCT_QUANTITY;
  payload: {data: ProductsListInterface, productIndex: number};
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
  productIndex: number
) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {data, productIndex}
  };
};

export const deleteFromCart: ActionCreator<DeleteFromCartAction> = (
  data: ProductsListInterface,
  productIndex: number
) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: {data, productIndex}
  };
};

export const increaseProductQty: ActionCreator<IncreaseProductQtyAction> = (
  data: ProductsListInterface,
  productIndex: number
) => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    payload: {data, productIndex}
  };
};

export const decreaseProductQty: ActionCreator<DecreaseProductQtyAction> = (
  data: ProductsListInterface,
  productIndex: number
) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    payload: {data, productIndex}
  };
};
