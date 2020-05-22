import { combineReducers } from "redux"; 

import currencyReducer from "./currencyReducer";
import productsReducer from "./productsReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  currency: currencyReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});
