import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

// ============ REDUX ACTIONS =========== \\
import {
    addToCartDispatch,
    removeFromCartDispatch,
} from "../../../redux/actions/shoppingCartActions";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import {
    AddButton,
    ItemContainer,
    ItemDescription,
    ItemImage,
    ItemName,
    ItemPrice,
    RemoveButton
} from "./MenuItemStyles";

// ============ ASSETS =========== \\
import pizzaIcon from "../assets/PizzaIcon.svg";

const MenuItem = ({ currentCurrency, description, dollar_price, euro_price, id, inCart, name }) => {
    const dispatch = useDispatch();

    function addOnClick() {
        dispatch(addToCartDispatch(id));
    }
    function removeOnClick() {
        dispatch(removeFromCartDispatch(id));
    }

    return (
        <ItemContainer>
            <ItemImage src={pizzaIcon} />
            <ItemName>{name}</ItemName>
            <ItemDescription>{description}</ItemDescription>
            <ItemPrice data-cy="itemPrice">{currentCurrency === "dollar" ? `$ ${dollar_price}` : `€ ${euro_price}`}</ItemPrice>
            {inCart ?
                <RemoveButton onClick={removeOnClick} data-cy={`${id}remove`}>Remove</RemoveButton> :
                <AddButton onClick={addOnClick} data-cy={`${id}add`}>Add To Cart</AddButton>
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