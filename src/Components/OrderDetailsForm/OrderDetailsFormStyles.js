import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 35px;
    font-weight: 300;
    margin-top: 40px;
    margin-bottom: 25px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 25px;
    font-size: 14px;
    margin: 7px 0;
`;

export const ContinueButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 150px;
    border-radius: 4px;
    margin-bottom: 20px;
    color: white;
    background: #a0a0a0;
    cursor: pointer;
    margin-top: 20px;
`;