import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { calculateCartSubTotal, firstToUppercase } from "../utils/utilFunctions";
import { removeFromCartDispatch } from "../../redux/actions/shoppingCartActions";

import {
    CartItems,
    Price,
    CartFooterContainer,
    PriceContainer,
    ShoppingCartContainer,
    SubtotalContainer,
    CheckoutButton,
    CancelButton,
    RemoveButton,
    ButtonsContainer,
    EmptyCartMessage,
    Title,
} from "./ShoppingCartStyles";
import CartItem from "./CartItem";
import CartHeader from "./CartItem/CartItemsHeader";
import PopupMessage from "../utils/PopupMessage";

const ShoppingCart = ({ currentCurrency, productMap, shoppingCart })=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [toDeleteItem, setToDeleteItem] = useState(null);
    const [isEmptyCart, setIsEmptyCart] = useState(false)

    useEffect(() => {
        if(Object.keys(productMap).length) setCartTotal(calculateCartSubTotal(productMap, shoppingCart, currentCurrency));
    },[currentCurrency, shoppingCart, productMap]);

    useEffect(() => {
        if(!Object.keys(shoppingCart).length) setIsEmptyCart(true);
    },[shoppingCart])

    function checkoutOnClick() {
        if(showPopup || !Object.keys(shoppingCart).length) return;
        history.push("/orderdetails");
    }

    function removeItem(){
        dispatch(removeFromCartDispatch(toDeleteItem.id))
        setShowPopup(false);
        setToDeleteItem(null);
    }

    function showItemRemovePopup(name, category, id){
        setToDeleteItem({
            name,
            category,
            id,
        });
        setShowPopup(true);
    }

    return(
        <ShoppingCartContainer>
            <Title>Your Order</Title>
            <CartHeader/>
            {!!Object.keys(productMap).length &&
                <>
                    <CartItems>
                        {!isEmptyCart ? 
                            (Object.keys(shoppingCart).map((itemId)=>
                            <CartItem
                                key = {itemId}
                                {...productMap[itemId]}
                                quantity = {shoppingCart[itemId]}
                                currentCurrency = {currentCurrency}
                                showItemRemovePopup = {
                                        () => showItemRemovePopup(productMap[itemId].name, productMap[itemId].category, itemId)
                                    }
                            />)) :
                            (<EmptyCartMessage>Your cart is empty</EmptyCartMessage>)
                        }
                    </CartItems>
                    {!isEmptyCart &&
                        <CartFooterContainer>
                            <PriceContainer>
                                <SubtotalContainer>Subtotal: <Price>{currentCurrency === 'dollar' ? "$ " : "€ "}{cartTotal}</Price></SubtotalContainer> 
                                <CheckoutButton onClick = {checkoutOnClick}>Checkout</CheckoutButton>
                            </PriceContainer>
                        </CartFooterContainer>}
                    {showPopup && 
                        <PopupMessage text={`Remove "${firstToUppercase(toDeleteItem.category)}: ${toDeleteItem.name}" from your cart?`}>
                            <ButtonsContainer>
                                <CancelButton onClick = {() => setShowPopup(false)}>Cancel</CancelButton>
                                <RemoveButton onClick = {removeItem}>Remove</RemoveButton>
                            </ButtonsContainer>
                        </PopupMessage>}
                </>
            }
        </ShoppingCartContainer>
    )
}

ShoppingCart.propTypes = {
    currentCurrency: PropTypes.string.isRequired,
    productMap: PropTypes.object.isRequired,
    shoppingCart: PropTypes.object.isRequired,
}

export default ShoppingCart;