import { Types } from "../constants/type";

const initalState  = {
  products : [],
  product: {},
  filteredItems: [],
  categories: [],
  category: "",
  sort: "",
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
      case Types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
      case Types.FILTER_CATEGORY:
      return {
        ...state,
        filteredItems: action.payload,
        category: action.category,
      };
      case Types.FILTER_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
      case Types.FILTER_SORT:
        return {
          ...state,
          filteredItems: action.payload,
          sort: action.sort,
        };
    default:
      return state;
  }
} 