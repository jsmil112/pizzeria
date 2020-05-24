import styled from "styled-components";

export const Title = styled.div`
    margin-top: 40px;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
    @media(min-width: 535px){
        font-size: 50px;
    }
`;

export const ConfirmOrderContainer = styled.div`
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

export const PriceAndDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    border-top: 1px solid black;
    padding: 0 25px;
    padding-top: 10px;
    @media(min-width: 535px){
        width: 75%;
    }
    @media(min-width: 700px){
        padding-top: 20px;
        flex-direction: row;
        align-items: unset;
        justify-content: space-between;
    }
`;

export const PriceItemContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 3px 0;
    @media(min-width: 535px) {
        justify-content: unset;
    }
`;

export const PriceItemLabel = styled.div`
    width: 80px;
`;

export const OrderDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    padding-bottom: 10px;
    padding-left: 5%;
    padding-right: 5%;
    border-bottom: 1px solid black;
    @media(min-width: 700px){
        width: 100%;
        width: 350px;
        padding: 0;
        border-bottom: unset
    }
`;

export const DetailItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3px 0;
    @media(min-width: 700px){
        justify-content: unset;
    }
`;

export const DetailLabel = styled.div`
    width: 170px
`;

export const Detail = styled.div`
    width: 180px;
`;

export const Price = styled.div`
    width: 80px;
    text-align: right;
    @media(min-width: 700px){
        margin-left: 22px;
        text-align: left;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-right: -29px;
    align-items: center;
    width: 182px;
    padding-top: 15px;
    @media(min-width: 700px){
        padding-top: unset;
        align-self: unset;
    }
`;