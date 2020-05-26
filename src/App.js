import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// ============ REDUX ACTIONS =========== \\
import { fetchProducts } from "./redux/actions/productsActions";

// ============ COMPONENTS ============= \\
import ConfirmOrder from "./components/ConfirmOrder";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import OrderDetailsForm from "./components/OrderDetailsForm";
import OrderPlaced from "./components/OrderPlaced";
import ShoppingCart from "./components/ShoppingCart";
import { AppContainer } from "./components/utils/styledUtilElements";

export default () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart.currentCart);
  const orderDetails = useSelector(state => state.orderDetails.details);

  // Fetch menu items once app loads.
  useEffect(() => {
    dispatch(fetchProducts())
      .then(res => {
        if(!res) console.log("fetchProducts Error");
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // Keeping data in browser storage.
  useEffect(() => {
    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  },[shoppingCart])
  useEffect(() => {
    window.localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  },[orderDetails])

  return (
    <AppContainer>
      <Navbar/>
      <Route exact path = "/" component = {Menu}/>
      <Route exact path = "/cart" component = {ShoppingCart}/>
      <Route exact path = "/confirm" component = {ConfirmOrder}/>
      <Route exact path = "/orderdetails" component = {OrderDetailsForm}/>
      <Route exact path = "/orderplaced" component = {OrderPlaced}/>
    </AppContainer>
  );
};
