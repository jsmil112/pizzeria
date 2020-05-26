import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// ============ REDUX ACTIONS =========== \\
import { addOrderDetailsDispatch } from "../../redux/actions/orderDetailsActions";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import PopupMessage from "../utils/PopupMessage";
import {
    FormContainer,
    FormInput,
    OrderDetailsContainer,
    Title,
} from "./OrderDetailsFormStyles";
import { StyledButton } from "../utils/styledUtilElements";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <FormInput 
                    data-cy = "nameInput"
                    type = "text" 
                    placeholder = "Name" 
                    value = {name} 
                    onChange = {(e) => formOnChange(e, setName)}
                />
                <FormInput 
                    data-cy = "contactInput"
                    type = "text" 
                    placeholder = "Contact Number" 
                    value = {contactNumber} 
                    onChange={(e) => formOnChange(e, setContactNumber)}
                />
                <FormInput 
                    data-cy = "addressInput"
                    type = "text" 
                    placeholder = "Address" 
                    value = {address} 
                    onChange = {(e) => formOnChange(e, setAddress)}
                />
            </FormContainer>
            <StyledButton data-cy = "continueButton" onClick = {continueOnClick}>Continue</StyledButton>
            {showPopup && <PopupMessage dataCy = "popupMessage" text = {"Incomplete form. Please provide all requested information to continue."}>
                             <StyledButton data-cy = "okButton" onClick = {() => setShowPopup(false)}>Ok</StyledButton>
                          </PopupMessage>}
        </OrderDetailsContainer>
    )
};