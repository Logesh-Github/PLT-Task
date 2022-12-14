import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  TOGGLE_LOADER,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
} from '../types';

export interface ProductsListInterface {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
  isAddedToCart?: boolean;
  productCount?: number;
  newPrice?: number
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
      let cartTempArr: ProductsListInterface[] = [...state.cartList];
      let productTempArr: ProductsListInterface[] = [...state.productList];
      let product: any = productTempArr.find((item: ProductsListInterface, index: number) => index === action.payload.productIndex);
      product.isAddedToCart = true;
      product.productCount = 1;
      productTempArr[action.payload.productIndex] = product;
      cartTempArr.push(action.payload.data);
      return {
        ...state,
        productList: productTempArr,
        cartList: cartTempArr,
      };
    }
    case DELETE_PRODUCT_FROM_CART: {
      let cartTempArr: ProductsListInterface[] = [...state.cartList];
      let productTempArr: ProductsListInterface[] = [...state.productList];
      let product: any = productTempArr.find((item: ProductsListInterface, index: number) => index === action.payload.productIndex);
      product.isAddedToCart = false;
      productTempArr[action.payload.productIndex] = product;
      cartTempArr.splice(cartTempArr.findIndex((a, i) => i === action.payload.productIndex) , 1);
      return {
        ...state,
        productList: productTempArr,
        cartList: cartTempArr
      };
    }
    case INCREASE_PRODUCT_QUANTITY: {
      let cartTempArr: ProductsListInterface[] = [...state.cartList];
      let product: any = cartTempArr.find((item: ProductsListInterface, index: number) => index === action.payload.productIndex);
      let count = product.productCount;
      let newCount = count + 1;
      product.productCount = newCount;
      let basePrice = product.price;
      let increasedPrice = product?.newPrice ? product?.newPrice : product.price;
      let newPrice = increasedPrice + basePrice;
      product.newPrice = newPrice;
      cartTempArr[action.payload.productIndex] = product;
      return {
        ...state,
        cartList: cartTempArr,
      };
    }
    case DECREASE_PRODUCT_QUANTITY: {
      let cartTempArr: ProductsListInterface[] = [...state.cartList];
      let product: any = cartTempArr.find((item: ProductsListInterface, index: number) => index === action.payload.productIndex);
      let count = product.productCount;
      let newCount = count - 1;
      product.productCount = newCount;
      let basePrice = product.price;
      let decreasedPrice = product?.newPrice ? product?.newPrice : product.price;
      let newPrice = decreasedPrice - basePrice;
      product.newPrice = newPrice;
      cartTempArr[action.payload.productIndex] = product;
      return {
        ...state,
        cartList: cartTempArr,
      };
    }
    default:
      return state;
  }
}
