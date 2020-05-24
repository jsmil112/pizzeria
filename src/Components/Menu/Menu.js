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

const Menu = ({ currentCurrency, products, shoppingCart }) => {
    return(
        <MenuContainer>
            <MenuTitle>MENU</MenuTitle>
            <MenuCategoriesContainer>
                <MenuCategory isActive={true}>Pizza</MenuCategory>
            </MenuCategoriesContainer>
            <ItemsListContainer>
                    {products.map((product)=>(
                        <MenuItem 
                            key={product.id} 
                            {...product} 
                            currentCurrency={currentCurrency} 
                            inCart={!!shoppingCart[product.id]}/>
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
