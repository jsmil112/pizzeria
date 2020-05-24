import { ADD_ORDER_DETAILS, RESET_ORDER_DETAILS } from "../constants";

export const addOrderDetailsDispatch = info => ({
    type: ADD_ORDER_DETAILS,
    info,
});

export const resetOrderDetailsDispatch = () => ({
    type: RESET_ORDER_DETAILS
});