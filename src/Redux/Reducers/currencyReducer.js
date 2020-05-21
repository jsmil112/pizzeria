import { SET_CURRENCY_DOLLAR, SET_CURRENCY_EURO } from "../constants";

const initialState = {
    currencyType: "dollar",
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENCY_DOLLAR:
            return { currency: "dollar" };
        case SET_CURRENCY_EURO:
            return { currency: "euro" };
        default:
            return state;
    }
}