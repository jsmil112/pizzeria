import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

// ============ REDUX ACTIONS =========== \\
import { addToCartDispatch, removeOneFromCartDispatch } from "../../../redux/actions/shoppingCartActions";

// ============ FUNCTIONS =========== \\
import { firstToUppercase } from "../../utils/utilFunctions";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import {
    AddOne,
    ItemContainer,
    ItemName,
    ItemPrice,
    ItemTotalContainer,
    ItemTotal,
    QuantityContainer,
    QuantityNumber,
    RemoveOne,
} from "./CartItemStyles";


const CartItem = ({
    category, 
    currentCurrency, 
    dollar_price, 
    euro_price, 
    id, 
    name, 
    noAddRemoveButtons, 
    quantity, 
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
        <ItemContainer data-cy = {`${id}cartItem`}>
            <ItemName>{firstToUppercase(category)}: {name}</ItemName>
            <ItemPrice data-cy = {`${id}itemPrice`}>{currentCurrency === "dollar" ? `$ ${dollar_price}` : `€ ${euro_price}`}</ItemPrice>
            <QuantityContainer>
                {!noAddRemoveButtons && <RemoveOne onClick = {removeOneOnClick} data-cy = {`${id}cartItemRemoveOne`}>-</RemoveOne>}
                <QuantityNumber data-cy = {`${id}cartItemQuantity`}>{quantity}</QuantityNumber>
                {!noAddRemoveButtons &&<AddOne onClick = {addOneOnClick} data-cy = {`${id}cartItemAddOne`}>+</AddOne>}
            </QuantityContainer>
            <ItemTotalContainer>
                <ItemTotal data-cy = "itemPrice">
                {currentCurrency === "dollar" ? 
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
    showItemRemovePopup: PropTypes.func,
 }
 
 export default CartItem;