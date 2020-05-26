import React from "react";
import PropTypes from "prop-types";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import { PopupContainer, PopupText } from "./PopupMessageStyles";

const PopupMessage = ({ children, dataCy, height,  text, width }) => {
    return(
        <PopupContainer data-cy = {dataCy} width = {width || "300px"} height = {height || "88px"}>
            <PopupText>{text}</PopupText>
            {children && children}
        </PopupContainer>
    )
};

PopupMessage.propTypes = {
    text: PropTypes.string.isRequired,
}

export default PopupMessage;