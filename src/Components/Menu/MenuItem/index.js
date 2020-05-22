import React from "react";
import PropTypes from "prop-types";

import { 
    AddButton, 
    ItemContainer, 
    ItemDescription, 
    ItemImage, 
    ItemName, 
    ItemPrice, 
    RemoveButton
} from "./MenuItemStyles";

import pizzaIcon from "../assets/PizzaIcon.svg";

const MenuItem = ({currentCurrency, description, dollar_price, euro_price, id, name}) => {
    return (
        <ItemContainer>
            <ItemImage src={pizzaIcon}/>
            <ItemName>{name}</ItemName>
            <ItemDescription>{description}</ItemDescription>
            <ItemPrice>{currentCurrency === 'dollar' ? `$ ${dollar_price}` : `€ ${euro_price}`}</ItemPrice>
            <AddButton>Add To Cart</AddButton>
        </ItemContainer>
    )
};

MenuItem.propTypes = {
   currentCurrency: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   dollar_price: PropTypes.string.isRequired,
   euro_price: PropTypes.string.isRequired,
   id: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired,
}

export default MenuItem;