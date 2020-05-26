import axios from "axios";

const urlBase = process.env.REACT_APP_BASE_URL;

export const postOrder = (data) => {
    return axios.post(`${urlBase}/order`, {
        data
    }).then(res =>{
        return res.status;
    }).catch(error => console.log(error));
}

