import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import OrderDetailsForm from "./OrderDetailsForm";

export default () => {
    const shoppingCart = useSelector(state => state.shoppingCart.currentCart);
    const history = useHistory();
    if(!Object.keys(shoppingCart).length) history.push("/");

    return(
        <OrderDetailsForm/>
    )
};