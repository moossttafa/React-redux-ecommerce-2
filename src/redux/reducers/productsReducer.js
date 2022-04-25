import { Types } from "../constants/type";

const initalState  = {
  products : [],
  product: {},
}
export const productsReducer = (state = initalState  , action ) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      return{ ...state,
        products: action.payload
      };
      case Types.SELECTED_PRODUCT: 
      return{ ...state , 
        product: action.payload
      };
      case Types.FILTER_CATEGORY:
      return {
        ...state,
        filteredItems: action.payload,
        category: action.category,
      };
    default:
      return state;
  }
} 