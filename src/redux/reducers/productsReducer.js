import { SET_PRODUCTS } from "../constants";

const initialState = {
    productsList: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {productsList: action.products};
        default:
            return state;
    }
}