import React, {useEffect} from 'react';
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ============ REDUX ACTION =========== \\
import { fetchProducts } from "./redux/actions/productsActions";

// ============ COMPONENTS ============= \\
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import ShoppingCart from "./components/ShoppingCart";
// import OrderDetailsForm from "./components/OrderDetailsForm";
// import ConfirmOrder from "./components/ConfirmOrder";

import { AppContainer } from "./components/utils/styledUtilElements";

export default () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart.currentCart);

  // Fetch Menu items once app loads.
  useEffect(()=>{
    dispatch(fetchProducts())
      .then(res => {
        if(!res) console.log("fetchProducts Error");
      })
  },[])

  // Keep copy of shopping cart in browser storage.
  useEffect(()=>{
    window.localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  },[shoppingCart])

  return (
    <AppContainer>
      <Navbar/>
      <Route exact path="/" component={Menu}/>
      <Route exact path="/Cart" component={ShoppingCart}/>
    </AppContainer>
  );
};
