import styled from "styled-components";

export const PopupContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 187px;
    text-align: center;
    padding: 30px;
    border-radius: 7px;
    background: white;
    max-width: 70%;
    -webkit-box-shadow: 0px 3px 28px -12px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 28px -12px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 28px -12px rgba(0,0,0,0.75);
`;

export const PopupText = styled.div`
    font-size: 12px;
    @media(min-width: 535px) {
        font-size: 20px;
    }
`;
