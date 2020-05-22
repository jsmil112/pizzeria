import { combineReducers } from "redux"; 

import currencyReducer from "./currencyReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  currency: currencyReducer,
  products: productsReducer,
});
