import { combineReducers } from "redux"; 

import currencyReducer from "./currencyReducer";
import orderDetailsReducer from "./orderDetailsReducer";
import productsReducer from "./productsReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  currency: currencyReducer,
  orderDetails: orderDetailsReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});