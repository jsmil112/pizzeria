import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 150px;
    border-radius: 4px;
    margin-bottom: 20px;
    color: white;
    background: red;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #ef9393;
    }
`;