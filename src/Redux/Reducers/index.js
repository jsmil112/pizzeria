import { combineReducers } from "redux"; 

import currencyReducer from "./currencyReducer";
import productsReducer from "./productsReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import orderDetailsReducer from "./orderDetailsReducer";

export default combineReducers({
  currency: currencyReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  orderDetails: orderDetailsReducer,
});