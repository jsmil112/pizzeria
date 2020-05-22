import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 12px;
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
    max-width: 900px;
    @media(min-width: 535px){
        width: 75%;
    }
`;

export const PriceContainer = styled.div`
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

export const PriceBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: -7px;

`;

export const Price = styled.div`
    margin-left: 22px;
`;

export const SubtotalContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media(min-width: 535px) {
        justify-content: unset;
    }
`;

export const CheckoutButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 150px;
    border-radius: 4px;
    margin-bottom: 20px;
    color: white;
    background: black;
    cursor: pointer;
    margin-top: 20px;
`;