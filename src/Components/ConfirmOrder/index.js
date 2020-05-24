import React from "react";
import { useSelector } from "react-redux";

import { convertToKeyValueObject } from "../utils/utilFunctions";
import ConfirmOrder from "./ConfirmOrder";

export default () => {
    const currentCurrency = useSelector(state => state.currency.current);
    const orderDetails = useSelector(state => state.orderDetails.details);
    const productList = useSelector(state => state.products.productsList);
    const shoppingCart = useSelector(state => state.shoppingCart.currentCart);

    return(
        <ConfirmOrder
            currentCurrency = {currentCurrency}
            orderDetails = {orderDetails}
            productMap = {convertToKeyValueObject(productList)}
            shoppingCart = {shoppingCart} 
        />
    )
};