import { ADD_ORDER_DETAILS, RESET_ORDER_DETAILS } from "../constants";

const initialState = {
    details: JSON.parse(window.localStorage.getItem('orderDetails')) ||
    {
        name: "",
        contactNumber: "",
        address: "",
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER_DETAILS:
            return { details: { ...action.info } };
        case RESET_ORDER_DETAILS:
            return { details: {
                    name: "",
                    contactNumber: "",
                    address: "",
                }};
        default:
            return state;
    }
}