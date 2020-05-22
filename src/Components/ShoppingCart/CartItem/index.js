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

const CartItem = ({category, currentCurrency, dollar_price, euro_price, id, name, quantity}) => {
    const dispatch = useDispatch();
    function calculateTotal(price){
        return Number.parseFloat(price * quantity).toFixed(2);
    }

    function firstToUppercase(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function addOneOnClick(){
        dispatch(addToCartDispatch(id))
    }

    function removeOneOnClick(){
        dispatch(removeOneFromCartDispatch(id))
    }

    return(
        <ItemContainer>
            <ItemName>{firstToUppercase(category)}: {name}</ItemName>
            <ItemPrice>{currentCurrency === 'dollar' ? `$ ${dollar_price}` : `€ ${euro_price}`}</ItemPrice>
            <QuantityContainer>
                <RemoveOne onClick = {removeOneOnClick}>-</RemoveOne>
                <QuantityNumber>{quantity}</QuantityNumber>
                <AddOne onClick = {addOneOnClick}>+</AddOne>
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
 }
 
 export default CartItem;