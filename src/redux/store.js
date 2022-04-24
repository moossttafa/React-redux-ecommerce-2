import { RootReducers } from "./reducers";
import {  applyMiddleware, compose, createStore } from "redux";
import Thunk from "redux-thunk";

let middleware = [Thunk];

const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;