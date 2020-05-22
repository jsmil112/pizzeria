import React, {useEffect} from 'react';
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// ============ REDUX ACTION =========== \\
import { fetchProducts } from "./redux/actions/productsActions";

// ============ COMPONENTS ============= \\
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
// import ShoppingCart from "./Components/Menu";
// import OrderDetailsForm from "./Components/Menu";
// import ConfirmOrder from "./Components/Menu";

import { AppContainer } from "./components/utils/styledUtilElements";

export default () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
      .then(res => {
        if(!res) console.log("fetchProducts Error");
      })
  },[])

  return (
    <AppContainer>
      <Navbar/>
      <Route exact path="/" component={Menu}/>
    </AppContainer>
  );
};
