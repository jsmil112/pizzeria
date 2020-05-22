import { SET_PRODUCTS } from "../constants";
import axios from "axios";

const urlBase = process.env.REACT_APP_APP_BASE_URL;

export const setProductsDispatch = products => ({
    type: SET_PRODUCTS,
    products,
});

export const fetchProducts = () => dispatch => {
    return axios
        .get(`${urlBase}/products`)
        .then(res => {
            dispatch(setProductsDispatch(res.data));
            return res.status;
        })
        .catch(error => console.log(error));
};