import React, {useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

// ################### << COMPONENTS >> ####################
// #########################################################
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
// import ShoppingCart from "./Components/Menu";
// import OrderDetailsForm from "./Components/Menu";
// import ConfirmOrder from "./Components/Menu";

import { AppContainer } from "./Components/Utils/StyledUtils";

export default () => {
  return (
    <AppContainer>
      <Navbar/>
    </AppContainer>
  );
};
