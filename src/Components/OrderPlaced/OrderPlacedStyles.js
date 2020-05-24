import styled from "styled-components";

export const OrderPlacedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
`;

export const Title = styled.div`
    font-size: 30px;
    @media(min-width: 600px){
        font-size: 40px;
    }
`;

export const Subtitle = styled.div`
    font-size: 15px;
    margin-top: 7px;
    margin-bottom: 16px;
    width: 95%;
    text-align: center;
    @media(min-width: 600px){
        font-size: 25px;
    }
`;