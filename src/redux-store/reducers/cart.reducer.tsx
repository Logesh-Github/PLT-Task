import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  TOGGLE_LOADER,
} from '../types';

interface productsListInterface {
  id: string;
  color: string;
  name: string;
  price: number;
  img: string;
}

interface CartState {
  productList: productsListInterface[];
  cartList: productsListInterface[];
  isLoading: boolean;
}

type Action = {
  type: string;
  payload?: any;
};

const initialState: CartState = {
  productList: [],
  cartList: [],
  isLoading: false,
};

export function cartReducer(
  state: CartState = initialState,
  action: Action,
): CartState {
  switch (action.type) {
    case TOGGLE_LOADER: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        productList: action.payload,
      };
    }
    case GET_PRODUCTS_FAIL: {
      return {
        ...state,
        isLoading: false,
        productList: [],
      };
    }
    default:
      return state;
  }
}