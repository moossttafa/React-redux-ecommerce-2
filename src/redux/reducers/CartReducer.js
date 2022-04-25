import { Types } from "../constants/type"

const initialState = {
  cartItems: [],
};

const CartReducer = (state = initialState , action) => {
  switch (action.type) {
    case Types.ADD_CART:
      return { ...state.cartItems,
         cartItems: action.payload.cartItems 
        };
    case Types.REMOVE_CART:
      return { ...state.cartItems,
         cartItems: action.payload.cartItems 
        };
        case Types.REMOVE_ALL_PRODUCTS:
      return { ...state.cartItems, cartItems: [] };
    default:
      return state;
    }
  };


  export default CartReducer;