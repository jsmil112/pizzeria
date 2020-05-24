import { SET_CURRENCY_DOLLAR, SET_CURRENCY_EURO } from "../constants";

const initialState = {
    current: "dollar",
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENCY_DOLLAR:
            return { current: "dollar" };
        case SET_CURRENCY_EURO:
            return { current: "euro" };
        default:
            return state;
    }
}