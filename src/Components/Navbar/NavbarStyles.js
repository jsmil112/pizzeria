import styled from "styled-components";

import dollarIcon from "./assets/DollarIcon.svg";
import euroIcon from "./assets/EuroIcon.svg";
import shoppingCart from "./assets/ShoppingCart.svg";

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    height: 60px;
    width: 100%;
    background-color: #efefef;
    border-bottom: 1px solid black;
    padding: 0 20px;
    box-sizing: border-box;
    min-width: 320px;
`;

export const Title = styled.div`
    font-family: "Teko", sans-serif;
    font-size: 44px;
    line-height: 44px;
    cursor: pointer;
    margin-bottom: -8px;
`;

export const CurrencyButtonsContainer = styled.div`
    display: flex;
    border-radius: 4px;
    height: 44px;
    border: 1px solid black;
    background: #FFFFFF;
    margin-left: auto;
`;

export const CurrencyButtonContainer = styled.div`
    display: flex;
    width: 30px;
    // ${({isActive}) => isActive && "background: #d0e7f9;"}
    ${({isActive}) => isActive && `
        -webkit-box-shadow: inset 0px 0px 4px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 0px 0px 4px 1px rgba(0,0,0,0.75);
        box-shadow: inset 0px 0px 4px 1px rgba(0,0,0,0.75);`}
    ${({currencyType}) => currencyType === "dollar" ?
        `background-image: url(${dollarIcon}); border-radius: 4px 0 0 4px; border-right: 1px solid black;` :
        `background-image: url(${euroIcon}); border-radius: 0 4px 4px 0;` 
    }
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover {
        background-color: #dbdbdb;
    }
`;

export const ShoppingCart = styled.div`
    display: flex;
    height: 44px;
    width: 44px;
    margin-left: 15px;
    background-image: url(${shoppingCart});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover {
        -webkit-box-shadow: 0px 0px 41px -9px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 41px -9px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 41px -9px rgba(0,0,0,0.75);
    }
`;