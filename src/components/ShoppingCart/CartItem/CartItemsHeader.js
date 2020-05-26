import React from "react";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import {
    HeaderContainer,
    ItemName,
    ItemPrice,
    QuantityContainer,
    ItemTotalContainer,
} from "./CartItemStyles";

export default () => {
    return(
        <HeaderContainer >
            <ItemName>Item</ItemName>
            <ItemPrice>Price</ItemPrice>
            <QuantityContainer>Quantity</QuantityContainer>
            <ItemTotalContainer style = {{justifyContent:"flex-end"}}>Total</ItemTotalContainer>
        </HeaderContainer>
    )
};



