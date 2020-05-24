import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addToCartDispatch, removeOneFromCartDispatch } from "../../../redux/actions/shoppingCartActions";

import {
    ItemContainer,
    ItemName,
    ItemPrice,
    QuantityContainer,
    QuantityNumber,
    AddOne,
    RemoveOne,
    ItemTotalContainer,
    ItemTotal,

} from "./CartItemStyles";

import { firstToUppercase } from "../../utils/utilFunctions";

const CartItem = ({
    category, 
    currentCurrency, 
    dollar_price, 
    euro_price, 
    id, 
    name, 
    quantity, 
    noAddRemoveButtons, 
    showItemRemovePopup}) => {
    const dispatch = useDispatch();
    function calculateTotal(price){
        return Number.parseFloat(price * quantity).toFixed(2);
    }

    function addOneOnClick(){
        dispatch(addToCartDispatch(id))
    }

    function removeOneOnClick(){
        quantity === 1 ? 
            showItemRemovePopup() :
            dispatch(removeOneFromCartDispatch(id))
    }

    return(
        <ItemContainer>
            <ItemName>{firstToUppercase(category)}: {name}</ItemName>
            <ItemPrice>{currentCurrency === 'dollar' ? `$ ${dollar_price}` : `€ ${euro_price}`}</ItemPrice>
            <QuantityContainer>
                {!noAddRemoveButtons && <RemoveOne onClick = {removeOneOnClick}>-</RemoveOne>}
                <QuantityNumber>{quantity}</QuantityNumber>
                {!noAddRemoveButtons &&<AddOne onClick = {addOneOnClick}>+</AddOne>}
            </QuantityContainer>
            <ItemTotalContainer>
                <ItemTotal>
                {currentCurrency === 'dollar' ? 
                    `$ ${calculateTotal(parseFloat(dollar_price))}` : 
                    `€ ${calculateTotal(parseFloat(euro_price))}`}
                </ItemTotal>
            </ItemTotalContainer>
        </ItemContainer>
    )
};

CartItem.propTypes = {
    category: PropTypes.string.isRequired,
    currentCurrency: PropTypes.string.isRequired,
    dollar_price: PropTypes.string.isRequired,
    euro_price: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    showItemRemovePopup: PropTypes.func.isRequired,
 }
 
 export default CartItem;