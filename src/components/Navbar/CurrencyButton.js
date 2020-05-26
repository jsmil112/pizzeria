import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

// ============ REDUX ACTIONS =========== \\
import { setCurrencyDollarsDispatch, setCurrencyEurosDispatch } from "../../redux/actions/currencyActions";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import { CurrencyButtonContainer } from "./NavbarStyles";

const CurrencyButton = ({ currencyType, dataCy }) => {
    const dispatch = useDispatch();
    const currentCurrency = useSelector(state => state.currency.current);

    function buttonOnClick(){
        if (currentCurrency === currencyType) return;
        currencyType === "dollar" ? 
            dispatch(setCurrencyDollarsDispatch()) :
            dispatch(setCurrencyEurosDispatch());
    }

    return(
        <CurrencyButtonContainer 
            onClick = {buttonOnClick}
            currencyType = {currencyType} 
            isActive = {currentCurrency === currencyType}
            data-cy = {dataCy}
        />
    )
}

CurrencyButton.propTypes = {
    currencyType: PropTypes.oneOf(["dollar","euro"]).isRequired,
    dataCy: PropTypes.string
}

export default CurrencyButton;