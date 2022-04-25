import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import { productsReducer }  from "./productsReducer";

export const RootReducers = combineReducers({
  allProducts : productsReducer, 
  Cart: CartReducer,
})