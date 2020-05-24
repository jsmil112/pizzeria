import styled from "styled-components";

import { StyledButton } from "../utils/styledUtilElements";

export const ShoppingCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 100%;
    font-size: 12px;
    max-width: 1200px;
    @media(min-width: 535px){
        font-size: unset;
    }
`;

export const Title = styled.div`
    margin-top: 40px;
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 10px;
`;

export const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 0 25px;
    @media(min-width: 535px){
        width: 75%;
    }
`;

export const CartFooterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 90%;
    border-top: 1px solid black;
    padding: 0 25px;
    padding-top: 20px;
    @media(min-width: 535px){
        width: 75%;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: -29px;
    align-items: center;
`;

export const Price = styled.div`
    margin-left: 22px;
    width: 80px;
`;

export const SubtotalContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media(min-width: 535px) {
        justify-content: unset;
    }
`;

export const CheckoutButton = styled(StyledButton)`
    margin-left:-35px;
    @media(min-width: 535px) {
        margin-left: unset;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
`;

export const CancelButton = styled(StyledButton)`
    background: #02b5a5;
    margin-right: 10px;
    width: 100px;
    @media(min-width: 535px) {
        width: 150px
    }
    &:hover {
        background: #7eb5b0;
    }
`;

export const RemoveButton = styled(StyledButton)`
    margin-left: 10px;
    width: 100px;
    @media(min-width: 535px) {
        width: 150px
    }
`;

export const EmptyCartMessage = styled.div`
    font-size: 25px;
    margin-top: 100px;
`;