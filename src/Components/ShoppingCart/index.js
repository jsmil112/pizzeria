import React, {useRef, useEffect, useState} from "react";
import {useSelector} from "react-redux";

import ShoppingCart from "./ShoppingCart";

export default ()=>{
    const currentCurrency = useSelector(state=>state.currency.current);
    const shoppingCart = useSelector(state => state.shoppingCart.currentCart);
    const productList = useSelector(state => state.products.productsList);

    function convertToKeyValueObject(){
        let productMap = {}
        productList.forEach((product) => {
            productMap[product.id] = product;
        })
        return productMap;
    }

    return(
        <ShoppingCart 
            currentCurrency = {currentCurrency}
            shoppingCart = {shoppingCart} 
            productMap={convertToKeyValueObject(productList)}
        />
    )
}