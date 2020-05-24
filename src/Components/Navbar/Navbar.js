import React from "react";
import { useHistory } from "react-router-dom";

import CurrencyButton from "./CurrencyButton";
import { CurrencyButtonsContainer, NavbarContainer, Title, ShoppingCart } from "./NavbarStyles";

export default () => {
    const history = useHistory();
    function shoppingCartOnClick(){
        history.push("/cart");
    }
    function titleOnClick(){
        history.push("/");
    }

    return(
        <NavbarContainer>
            <Title onClick = {titleOnClick}>Pizzeria</Title>
            <CurrencyButtonsContainer>
                <CurrencyButton currencyType = {"dollar"}/>
                <CurrencyButton currencyType = {"euro"}/>
            </CurrencyButtonsContainer>
            <ShoppingCart onClick = {shoppingCartOnClick}/>
        </NavbarContainer>
    )
};