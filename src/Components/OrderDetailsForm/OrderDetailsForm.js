import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { addOrderDetailsDispatch } from "../../redux/actions/orderDetailsActions";

import {
    OrderDetailsContainer,
    Title,
    FormContainer,
    FormInput,
    ContinueButton,
} from "./OrderDetailsFormStyles";
import { StyledButton } from "../utils/styledUtilElements";
import PopupMessage from "../utils/PopupMessage";

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const prevSetOrderDetails = useSelector(state => state.orderDetails.details);
    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(()=>{
        setName(prevSetOrderDetails.name);
        setContactNumber(prevSetOrderDetails.contactNumber);
        setAddress(prevSetOrderDetails.address);
    },[])

    function formOnChange(e, setState){
        setState(e.target.value);
    }

    function continueOnClick(){
        if(!name || !contactNumber || !address) {
            setShowPopup(true);
            return;
        }
        dispatch(addOrderDetailsDispatch({name, contactNumber, address}))
        history.push("/confirm");
    }

    return(
        <OrderDetailsContainer>
            <Title>Order Details</Title>
            <FormContainer>
                <FormInput type="text" placeholder="Name" value={name} onChange={(e) => formOnChange(e, setName)}/>
                <FormInput type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => formOnChange(e, setContactNumber)}/>
                <FormInput type="text" placeholder="Address" value={address} onChange={(e) => formOnChange(e, setAddress)}/>
            </FormContainer>
            <StyledButton onClick = {continueOnClick}>Continue</StyledButton>
        {showPopup && <PopupMessage text={"Incomplete form. Please provide all requested information to continue."}>
                        <StyledButton onClick = {() => setShowPopup(false)}>Ok</StyledButton>
                    </PopupMessage>}
        </OrderDetailsContainer>
    )
};