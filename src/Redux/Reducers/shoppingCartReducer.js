import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ONE_FROM_CART } from "../constants"

const initialState = {
    currentCart: JSON.parse(window.localStorage.getItem('shoppingCart')) || {},
}

export default (state = initialState, action) => {
    let newCart = {...state.currentCart};
    switch(action.type) {
        case ADD_TO_CART:
            newCart[action.productId] ? 
                newCart[action.productId]++ :
                newCart[action.productId] = 1;
            return {currentCart: newCart};
        case REMOVE_ONE_FROM_CART:
            newCart[action.productId] - 1 === 0 ? 
                delete newCart[action.productId] :
                newCart[action.productId]--;
            return {currentCart: newCart};
        case REMOVE_FROM_CART:
            delete newCart[action.productId];
            return {currentCart: newCart}
        default:
            return state;
    }
}
