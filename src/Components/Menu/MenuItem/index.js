import React from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

import { 
    AddButton, 
    ItemContainer, 
    ItemDescription, 
    ItemImage, 
    ItemName, 
    ItemPrice, 
    RemoveButton
} from "./MenuItemStyles";

import { 
    addToCartDispatch, 
    removeFromCartDispatch, 
    removeOneFromCartDispatch 
} from "../../../redux/actions/shoppingCartActions";

import pizzaIcon from "../assets/PizzaIcon.svg";

const MenuItem = ({currentCurrency, description, dollar_price, euro_price, id, inCart, name}) => {
    const dispatch = useDispatch();

    function addOnClick(){
        dispatch(addToCartDispatch(id));
    }

    function removeOnClick(){
        dispatch(removeFromCartDispatch(id));
    }

    return (
        <ItemContainer>
            <ItemImage src = {pizzaIcon}/>
            <ItemName>{name}</ItemName>
            <ItemDescription>{description}</ItemDescription>
            <ItemPrice>{currentCurrency === 'dollar' ? `$ ${dollar_price}` : `€ ${euro_price}`}</ItemPrice>
            {inCart ? 
                <RemoveButton onClick = {removeOnClick}>Remove</RemoveButton> :
                <AddButton onClick = {addOnClick}>Add To Cart</AddButton> 
            }
        </ItemContainer>
    )
};

MenuItem.propTypes = {
   currentCurrency: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   dollar_price: PropTypes.string.isRequired,
   euro_price: PropTypes.string.isRequired,
   id: PropTypes.number.isRequired,
   inCart: PropTypes.bool.isRequired,
   name: PropTypes.string.isRequired,
}

export default MenuItem;