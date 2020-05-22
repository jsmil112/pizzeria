import React from "react";
import { useSelector } from "react-redux";

import Menu from "./Menu";

export default () => {
    const currentCurrency = useSelector(state=>state.currency.current);
    const products = useSelector(state => state.products.productsList);

    return(
        <Menu products = {products} currentCurrency={currentCurrency}/>
    )
};