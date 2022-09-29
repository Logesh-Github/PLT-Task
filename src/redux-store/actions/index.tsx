import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, TOGGLE_LOADER } from '../types';
import {ActionCreator, Action, Dispatch} from 'redux';

interface productsListInterface {
    id: string
    color: string
    name: string
    price: number
    img: string
}

interface GetProductSuccessAction {
    type: typeof GET_PRODUCTS_SUCCESS,
    payload: productsListInterface[]
}

interface GetProductFailAction {
    type: typeof GET_PRODUCTS_FAIL,
}

interface ToggleLoaderAction {
    type: typeof TOGGLE_LOADER,
    payload: boolean
}

export const toggleLoader: ActionCreator<ToggleLoaderAction>= (value: boolean) => {
    return {
        type: TOGGLE_LOADER,
        payload: value
      };
}

export const getProductSuccess: ActionCreator<GetProductSuccessAction> = (data: productsListInterface[]) => {
    return {
      type: GET_PRODUCTS_SUCCESS,
      payload: data
    };
  };
  export const getProductFail: ActionCreator<GetProductFailAction> = () => {
    return {
      type: GET_PRODUCTS_FAIL
    };
  };

export const getProducts = () => async (
    dispatch: Dispatch<any>
  ) => {
    dispatch(toggleLoader(true));
    try {
      const res = await fetch('https://my-json-server.typicode.com/benirvingplt/products/products');
      const data = await res.json();
      dispatch(getProductSuccess(data));
    } catch(error) {
      dispatch(getProductFail());
    }
  };