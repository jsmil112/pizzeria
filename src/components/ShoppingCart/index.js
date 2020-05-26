import React from "react";
import {useSelector} from "react-redux";

// ============ FUNCTIONS =========== \\
import { convertToKeyValueObject } from "../utils/utilFunctions";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import ShoppingCart from "./ShoppingCart";

export default ()=>{
    const currentCurrency = useSelector(state=>state.currency.current);
    const productList = useSelector(state => state.products.productsList);
    const shoppingCart = useSelector(state => state.shoppingCart.currentCart);

    return(
        <ShoppingCart 
            currentCurrency = {currentCurrency}
            productMap={convertToKeyValueObject(productList)}
            shoppingCart = {shoppingCart} 
        />
    )
}