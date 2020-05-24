import React from "react";
import PropTypes from "prop-types";

import { PopupContainer, PopupText } from "./PopupMessageStyles";

const PopupMessage = ({text, children, width, height}) => {

    return(
        <PopupContainer width = {width || "300px"} height = {height || "88px"}>
            <PopupText>{text}</PopupText>
            {children && children}
        </PopupContainer>
    )
};

PopupMessage.propTypes = {
    text: PropTypes.string.isRequired,
}

export default PopupMessage;