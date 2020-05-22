import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 90%;
    padding: 0 25px;
    height: 35px;
    @media(min-width: 535px){
        width: 75%;
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 10px;
`;

export const ItemName = styled.div`
`;

export const ItemPrice = styled.div`
    width: 50px;
    margin-left: auto;
    @media(min-width: 535px) {
        width: 70px;
    }
`;

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 85px;
    display: flex;
    @media(min-width: 535px) {
        width: 100px;
    }
`;

export const AddOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    border: 1px solid black;
    cursor: pointer;
    background: #02b5a5;
    font-weight: 500;
    font-size: 18px;
    line-height: 0px;
`;

export const QuantityNumber = styled.div`
    display: flex;
    justify-content: center;
    width: 26px;
`;

export const RemoveOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    border: 1px solid black;
    cursor: pointer;
    background: red;
    font-weight: 500;
    font-size: 25px;
    line-height: 0px;
    padding-bottom: 4px;
`;

export const ItemTotalContainer = styled.div`
    display: flex;
    width: 45px;
    @media(min-width: 535px) {
        width: 60px;
    }
`;

export const ItemTotal = styled.div`
    display: flex;
    margin-left: 10px;
    white-space: nowrap;
`;