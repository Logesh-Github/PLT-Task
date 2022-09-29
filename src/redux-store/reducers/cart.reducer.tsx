import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  TOGGLE_LOADER,
  ADD_PRODUCT_TO_CART
} from '../types';

export interface ProductsListInterface {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
}

interface CartState {
  productList: ProductsListInterface[];
  cartList: ProductsListInterface[];
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
    case ADD_PRODUCT_TO_CART: {
      let tempArr = [...state.cartList];
      tempArr.push(action.payload);
      return {
        ...state,
        cartList: tempArr,
      };
    }
    default:
      return state;
  }
}
