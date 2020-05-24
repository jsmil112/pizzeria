import React from "react";
import { useHistory } from "react-router-dom";

import {
    Title,
    Subtitle,
    OrderPlacedContainer,

} from "./OrderPlacedStyles";
import { StyledButton } from "../utils/styledUtilElements";

export default () => {
    const history = useHistory();

    function returnToMenuOnClick(){
        history.push("/");
    }

    return(
        <OrderPlacedContainer>
            <Title>Order Placed!</Title>
            <Subtitle>Thank you, we are preparing your meal now.</Subtitle>
            <StyledButton onClick = {returnToMenuOnClick}>Return to Menu</StyledButton>
        </OrderPlacedContainer>
    )
};