import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import { setCurrencyDollarsDispatch, setCurrencyEurosDispatch } from "../../redux/actions/currencyActions";
import { CurrencyButtonContainer } from "./NavbarStyles";

const CurrencyButton = ({ currencyType }) => {
    const currentCurrency = useSelector(state => state.currency.current);
    const dispatch = useDispatch();

    function buttonOnClick(){
        if (currentCurrency === currencyType) return;
        currencyType === 'dollar' ? 
            dispatch(setCurrencyDollarsDispatch()) :
            dispatch(setCurrencyEurosDispatch());
    }

    return(
        <CurrencyButtonContainer 
            onClick = {buttonOnClick}
            currencyType = {currencyType} 
            isActive = {currentCurrency === currencyType}
        />
    )
}

CurrencyButton.propTypes = {
    currencyType: PropTypes.oneOf(['dollar','euro']).isRequired,
}

export default CurrencyButton;