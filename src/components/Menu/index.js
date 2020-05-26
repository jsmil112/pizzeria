import React from "react";
import { useSelector } from "react-redux";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import Menu from "./Menu";

export default () => {
    const currentCurrency = useSelector(state=>state.currency.current);
    const products = useSelector(state => state.products.productsList);
    const shoppingCart = useSelector(state => state.shoppingCart.currentCart);

    return(
        <Menu 
            currentCurrency = {currentCurrency} 
            products = {products} 
            shoppingCart = {shoppingCart}
        />
    )
};