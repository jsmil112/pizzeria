import React from "react";

import CurrencyButton from "./CurrencyButton";
import { CurrencyButtonsContainer, CurrencyDivider, NavbarContainer, Title, ShoppingCart } from "./NavbarStyles";

export default () => {
    return(
        <NavbarContainer>
            <Title>Pizzeria</Title>
            <CurrencyButtonsContainer>
                <CurrencyButton currencyType = {"dollar"}/>
                <CurrencyButton currencyType = {"euro"}/>
            </CurrencyButtonsContainer>
            <ShoppingCart/>
        </NavbarContainer>
    )
};