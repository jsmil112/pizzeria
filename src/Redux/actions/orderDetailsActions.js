import { ADD_ORDER_DETAILS } from "../constants";

export const addOrderDetailsDispatch = info => ({
    type: ADD_ORDER_DETAILS,
    info,
});