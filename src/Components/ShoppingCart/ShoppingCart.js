import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { calculateCartSubTotal } from "../utils/utilFunctions";

import {
    CartItems,
    CheckoutButton,
    Price,
    PriceBox,
    PriceContainer,
    ShoppingCartContainer,
    SubtotalContainer,
    Title,
} from "./ShoppingCartStyles";
import CartItem from "./CartItem";
import CartHeader from "./CartItem/CartItemsHeader";

const ShoppingCart = ({currentCurrency, productMap, shoppingCart})=>{
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        if(Object.keys(productMap).length) setCartTotal(calculateCartSubTotal(productMap, shoppingCart, currentCurrency));
    },[currentCurrency, shoppingCart, productMap]);

    console.log(cartTotal);

    return(
        <ShoppingCartContainer>
            <Title>Your Order</Title>
            <CartHeader/>
            {!!Object.keys(productMap).length &&
                <>
                    <CartItems>
                        { Object.keys(shoppingCart).map((itemId)=>
                            <CartItem
                                key = {itemId}
                                {...productMap[itemId]}
                                quantity = {shoppingCart[itemId]}
                                currentCurrency = {currentCurrency}
                            />
                        )}
                    </CartItems>
                    <PriceContainer>
                        <PriceBox>
                            <SubtotalContainer>Subtotal: <Price>{cartTotal}</Price></SubtotalContainer> 
                            <CheckoutButton>Checkout</CheckoutButton>
                        </PriceBox>
                    </PriceContainer>
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