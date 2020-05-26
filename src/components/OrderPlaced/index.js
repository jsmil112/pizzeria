import React from "react";
import { useHistory } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import {
    OrderPlacedContainer,
    Subtitle,
    Title,
} from "./OrderPlacedStyles";
import { StyledButton } from "../utils/styledUtilElements";

export default () => {
    const history = useHistory();
    const lastLocation = useLastLocation();
    
    // Ensure entry to view comes only from "/confirm".
    if(!lastLocation || lastLocation.pathname !== "/confirm") {
        history.push("/");
    }

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