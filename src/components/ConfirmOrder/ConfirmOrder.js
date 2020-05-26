import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// ============ REDUX ACTIONS =========== \\
import { resetCartDispatch } from "../../redux/actions/shoppingCartActions";
import { resetOrderDetailsDispatch } from "../../redux/actions/orderDetailsActions";

// ============ FUNCTIONS =========== \\
import { calculateCartSubTotal } from "../utils/utilFunctions";
import { postOrder } from "../../apiFunctions";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import CartHeader from "../ShoppingCart/CartItem/CartItemsHeader";
import CartItem from "../ShoppingCart/CartItem";
import PopupMessage from "../utils/PopupMessage";
import { CartItems } from "../ShoppingCart/ShoppingCartStyles";
import {
    ConfirmOrderContainer,
    DetailItemContainer,
    DetailLabel,
    Detail,
    OrderDetailsContainer,
    Price,
    PriceAndDetailsContainer,
    PriceContainer,
    PriceItemContainer,
    PriceItemLabel,
    Title,
} from "./ConfirmOrderStyles";
import { StyledButton } from "../utils/styledUtilElements";

const ConfirmOrder = ({ currentCurrency, orderDetails, productMap, shoppingCart }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Updates subtotal on currency type change.
    useEffect(() => {
        if(Object.keys(productMap).length) {
            setCartSubTotal(calculateCartSubTotal(productMap, shoppingCart, currentCurrency));
        }
    },[currentCurrency, shoppingCart, productMap]);

    function calculateTotal(currentCurrency){
        if(currentCurrency === "dollar")
            return Number.parseFloat(parseFloat(cartSubTotal) + 5.00).toFixed(2);
        else
            return Number.parseFloat(parseFloat(cartSubTotal) + 4.50).toFixed(2);
    }

    function confirmOrderOnClick(){
        if(isProcessing || errorMessage) return;
        setIsProcessing(true);

        let items = []
        for(let itemId in shoppingCart) {
            items.push({
                id : itemId,
                quantity : shoppingCart[itemId],
            })
        }

        let data = { 
                name : orderDetails.name,
                contact_number : orderDetails.contactNumber,
                address : orderDetails.address,
                subtotal : calculateCartSubTotal(productMap, shoppingCart, "dollar"),
                shipping : "5.00",
                total : calculateTotal("dollar"),
                items
        }

        postOrder(data).then(res => {
            setIsProcessing(false);
            if(res === 200) {
                localStorage.removeItem("shoppingCart");
                localStorage.removeItem("orderDetails");
                history.push("/orderplaced");
                dispatch((dispatch) => {
                    dispatch(resetOrderDetailsDispatch());
                    dispatch(resetCartDispatch());
                });
            }
            else setErrorMessage("There was a problem processing your order")
        })
    }

    return(
        <ConfirmOrderContainer>
            <Title>Confirm Your Order</Title>
            <CartHeader/>
            {!!Object.keys(productMap).length &&
                <>
                    <CartItems>
                        {Object.keys(shoppingCart).map((itemId) =>
                            <CartItem
                                key = {itemId}
                                {...productMap[itemId]}
                                currentCurrency = {currentCurrency}
                                noAddRemoveButtons = {true}
                                quantity = {shoppingCart[itemId]}
                            />
                        )}
                    </CartItems>
                    <PriceAndDetailsContainer>
                        <OrderDetailsContainer>
                            <DetailItemContainer>
                                <DetailLabel>Name: </DetailLabel>
                                <Detail data-cy = "detailName" >{orderDetails.name}</Detail>
                            </DetailItemContainer>
                            <DetailItemContainer>
                                <DetailLabel>Contact Number: </DetailLabel>
                                <Detail data-cy = "detailContact" >{orderDetails.contactNumber}</Detail>
                            </DetailItemContainer>
                            <DetailItemContainer>
                                <DetailLabel>Adress: </DetailLabel>
                                <Detail data-cy = "detailAddress" >{orderDetails.address}</Detail>
                            </DetailItemContainer>
                        </OrderDetailsContainer>
                        <PriceContainer>
                            <PriceItemContainer>
                                <PriceItemLabel>Subtotal:</PriceItemLabel>
                                <Price data-cy = "subtotal">{currentCurrency === "dollar" ? "$ " : "€ "}{cartSubTotal}</Price>
                            </PriceItemContainer> 
                            <PriceItemContainer>
                                <PriceItemLabel>Shipping:</PriceItemLabel>
                                <Price data-cy = "shipping">{currentCurrency === "dollar" ? "$ 5.00" : "€ 4.50"}</Price>
                            </PriceItemContainer>
                            <PriceItemContainer>
                                <PriceItemLabel>Total:</PriceItemLabel>
                                <Price data-cy = "total">{currentCurrency === "dollar" ? "$ " : "€ "}{calculateTotal(currentCurrency)}</Price>
                            </PriceItemContainer>  
                            <StyledButton data-cy = "placeOrder" onClick = {confirmOrderOnClick}>Place Order</StyledButton>
                        </PriceContainer>
                    </PriceAndDetailsContainer>
                    {isProcessing && <PopupMessage dataCy = "processPopup" text = {"Processing order..."}/>}
                    {errorMessage &&
                        <PopupMessage text = {"There was a problem processing your order. Please try again."}>
                            <StyledButton onClick = {() => setErrorMessage("")}>Ok</StyledButton>
                        </PopupMessage>
                    }
                </>
            }
        </ConfirmOrderContainer>
    )
};

ConfirmOrder.propTypes = {
    currentCurrency: PropTypes.string.isRequired,
    orderDetails: PropTypes.object.isRequired,
    productMap: PropTypes.object.isRequired,
    shoppingCart: PropTypes.object.isRequired,
}

export default ConfirmOrder;