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
      default:
        return state;
    }
  };


  export default CartReducer;