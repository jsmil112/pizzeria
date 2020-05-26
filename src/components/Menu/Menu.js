import React from "react";
import PropTypes from "prop-types";

// ============ COMPONENTS / STYLED COMPONENTS =========== \\
import MenuItem from "./MenuItem";
import { 
    MenuCategory,
    MenuCategoriesContainer, 
    MenuContainer, 
    MenuTitle, 
    ItemsListContainer,
} from "./MenuStyles"

const Menu = ({ currentCurrency, products, shoppingCart }) => {
    return(
        <MenuContainer>
            <MenuTitle>MENU</MenuTitle>
            <MenuCategoriesContainer>
                <MenuCategory isActive = {true}>Pizza</MenuCategory>
            </MenuCategoriesContainer>
            <ItemsListContainer id = "menuList">
                    {products.map((product) => (
                        <MenuItem 
                            key = {product.id} 
                            {...product} 
                            currentCurrency = {currentCurrency} 
                            inCart = {!!shoppingCart[product.id]}/>
                    ))}
            </ItemsListContainer>
        </MenuContainer>
    )
};

Menu.propTypes = {
    currentCurrency: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    shoppingCart: PropTypes.object.isRequired,
}

export default Menu;
