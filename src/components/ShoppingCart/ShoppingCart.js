import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// ============ REDUX ACTIONS =========== \\
import { removeFromCartDispatch } from "../../redux/actions/shoppingCartActions";

// ============ FUNCTIONS =========== \\
import { calculateCartSubTotal, firstToUppercase } from "../utils/utilFunctions";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import CartItem from "./CartItem";
import CartHeader from "./CartItem/CartItemsHeader";
import PopupMessage from "../utils/PopupMessage";
import {
    ButtonsContainer,
    CancelButton,
    CartItems,
    CartFooterContainer,
    CheckoutButton,
    EmptyCartMessage,
    Price,
    PriceContainer,
    RemoveButton,
    ShoppingCartContainer,
    SubtotalContainer,
    Title,
} from "./ShoppingCartStyles";

const ShoppingCart = ({ currentCurrency, productMap, shoppingCart }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [toDeleteItem, setToDeleteItem] = useState(null);
    const [isEmptyCart, setIsEmptyCart] = useState(false)

    // Updates cart total on changes to currency type changes and item quantity.
    useEffect(() => {
        if (Object.keys(productMap).length) setCartTotal(calculateCartSubTotal(productMap, shoppingCart, currentCurrency));
    }, [currentCurrency, shoppingCart, productMap]);

    useEffect(() => {
        if (!Object.keys(shoppingCart).length) setIsEmptyCart(true);
    }, [shoppingCart])

    function checkoutOnClick() {
        if (showPopup || !Object.keys(shoppingCart).length) return;
        history.push("/orderdetails");
    }

    function removeItem() {
        dispatch(removeFromCartDispatch(toDeleteItem.id))
        setShowPopup(false);
        setToDeleteItem(null);
    }

    function showItemRemovePopup(name, category, id) {
        setToDeleteItem({
            name,
            category,
            id,
        });
        setShowPopup(true);
    }

    return (
        <ShoppingCartContainer>
            <Title>Your Order</Title>
            <CartHeader />
            {!!Object.keys(productMap).length &&
                <>
                    <CartItems>
                        {!isEmptyCart ?
                            (Object.keys(shoppingCart).map((itemId) =>
                                <CartItem
                                    key = {itemId}
                                    {...productMap[itemId]}
                                    quantity = {shoppingCart[itemId]}
                                    currentCurrency = {currentCurrency}
                                    showItemRemovePopup = {
                                        () => showItemRemovePopup(productMap[itemId].name, productMap[itemId].category, itemId)
                                    }
                                />)) :
                            (<EmptyCartMessage data-cy = "emptyCart">Your cart is empty</EmptyCartMessage>)
                        }
                    </CartItems>
                    {!isEmptyCart &&
                        <CartFooterContainer>
                            <PriceContainer>
                                <SubtotalContainer>Subtotal: <Price>{currentCurrency === "dollar" ? "$ " : "€ "}{cartTotal}</Price></SubtotalContainer>
                                <CheckoutButton data-cy = "checkout" onClick={checkoutOnClick}>Checkout</CheckoutButton>
                            </PriceContainer>
                        </CartFooterContainer>}
                    {showPopup &&
                        <PopupMessage 
                            dataCy = "removePopup" 
                            text = {`Remove "${firstToUppercase(toDeleteItem.category)}: ${toDeleteItem.name}" from your cart?`}
                        >
                            <ButtonsContainer>
                                <CancelButton data-cy = "cancelButton" onClick = {() => setShowPopup(false)}>Cancel</CancelButton>
                                <RemoveButton data-cy = "removeButton" onClick = {removeItem}>Remove</RemoveButton>
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