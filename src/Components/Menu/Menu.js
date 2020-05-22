import React from "react";
import PropTypes from 'prop-types';

import { 
    MenuCategory,
    MenuCategoriesContainer, 
    MenuContainer, 
    MenuTitle, 
    ItemsListContainer,
} from "./MenuStyles"

import MenuItem from "./MenuItem";

const Menu = ({ currentCurrency, products }) => {
    return(
        <MenuContainer>
            <MenuTitle>MENU</MenuTitle>
            <MenuCategoriesContainer>
                <MenuCategory isActive={true}>Pizza</MenuCategory>
            </MenuCategoriesContainer>
            <ItemsListContainer>
                    {products.map((product)=>(
                        <MenuItem key={product.id} {...product} currentCurrency={currentCurrency}/>
                    ))}
            </ItemsListContainer>
        </MenuContainer>
    )
};

Menu.propTypes = {
    currentCurrency: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
}

export default Menu;
