import { Types } from "../constants/type";

const initalState  = {
  products : [],
  product: {}
}
export const productsReducer = (state = initalState  , action ) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      return{ ...state,
        products: action.payload
      };
    default:
      return state;
  }
} 