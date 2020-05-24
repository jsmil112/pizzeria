import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART, RESET_CART } from "../constants"

export const addToCartDispatch = productId => ({
    type: ADD_TO_CART,
    productId,
});

export const removeFromCartDispatch = productId => ({
    type: REMOVE_FROM_CART,
    productId,
});

export const removeOneFromCartDispatch = productId => ({
    type: REMOVE_ONE_FROM_CART,
    productId,
});

export const resetCartDispatch = () => ({
    type: RESET_CART,
})