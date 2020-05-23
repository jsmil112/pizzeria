import { ADD_ORDER_DETAILS } from "../constants";

const initialState = {
    details: {
        name: "",
        contactNumber: "",
        address: "",
    },
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER_DETAILS:
            return { details: {...action.info} };
        default:
            return state;
    }
}