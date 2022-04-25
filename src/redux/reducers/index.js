import { combineReducers } from "redux";
import { productsReducer }  from "./productsReducer";

export const RootReducers = combineReducers({
  allProducts : productsReducer, 
})