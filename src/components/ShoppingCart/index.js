import React, {useRef, useEffect, useState} from "react";
import {useSelector} from "react-redux";

import { convertToKeyValueObject } from "../utils/utilFunctions";

import ShoppingCart from "./ShoppingCart";

export default ()=>{
    const currentCurrency = useSelector(state=>state.currency.current);
    const shoppingCart = useSelector(state => state.shoppingCart.currentCart);
    const productList = useSelector(state => state.products.productsList);

    return(
        <ShoppingCart 
            currentCurrency = {currentCurrency}
            shoppingCart = {shoppingCart} 
            productMap={convertToKeyValueObject(productList)}
        />
    )
}