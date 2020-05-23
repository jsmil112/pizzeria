import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addOrderDetailsDispatch } from "../../redux/actions/orderDetailsActions";

import {
    OrderDetailsContainer,
    Title,
    FormContainer,
    FormInput,
    ContinueButton,
} from "./OrderDetailsFormStyles";

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");

    function formOnChange(e, setState){
        setState(e.target.value);
    }

    function continueOnClick(){
        dispatch(addOrderDetailsDispatch({name, contactNumber, address}))
        // history.pushState("/confirm");
    }

    return(
        <OrderDetailsContainer>
            {console.log(name,contactNumber,address)}
            <Title>Order Details</Title>
            <FormContainer>
                <FormInput type="text" placeholder="Name" value={name} onChange={(e) => formOnChange(e, setName)}/>
                <FormInput type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => formOnChange(e, setContactNumber)}/>
                <FormInput type="text" placeholder="Address" value={address} onChange={(e) => formOnChange(e, setAddress)}/>
            </FormContainer>
            <ContinueButton onClick={continueOnClick}>Continue</ContinueButton>
        </OrderDetailsContainer>
    )
};