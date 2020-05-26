import React from "react";
import { useHistory } from "react-router-dom";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
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
                <CurrencyButton dataCy="dollar" currencyType = {"dollar"}/>
                <CurrencyButton dataCy="euro" currencyType = {"euro"}/>
            </CurrencyButtonsContainer>
            <ShoppingCart onClick = {shoppingCartOnClick} data-cy="cartIcon"/>
        </NavbarContainer>
    )
};