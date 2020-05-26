import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// ============ FUNCTIONS =========== \\
import { convertToKeyValueObject } from "../utils/utilFunctions";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import ConfirmOrder from "./ConfirmOrder";

export default () => {
    const currentCurrency = useSelector(state => state.currency.current);
    const orderDetails = useSelector(state => state.orderDetails.details);
    const productList = useSelector(state => state.products.productsList);
    const shoppingCart = useSelector(state => state.shoppingCart.currentCart);
    const history = useHistory();

    // Prevents false entry from using "/confirm" URL 
    // with an empty shopping cart and no order details.
    if(!Object.keys(shoppingCart).length || !Object.keys(orderDetails).length) history.push("/");

    return(
        <ConfirmOrder
            currentCurrency = {currentCurrency}
            orderDetails = {orderDetails}
            productMap = {convertToKeyValueObject(productList)}
            shoppingCart = {shoppingCart} 
        />
    )
};