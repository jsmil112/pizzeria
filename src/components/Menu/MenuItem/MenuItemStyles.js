import styled from "styled-components";

import { StyledButton } from "../../utils/styledUtilElements";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    flex-shrink: no-shrink;
    margin-bottom: 20px;
`;

export const ItemImage = styled.img`
    width: 150px;
    height: 150px;
`;

export const ItemName = styled.div`
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ItemDescription = styled.div`
    text-align: center;
    width: 180px;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
`;

export const ItemPrice = styled.div`
    margin-top: auto;
    margin-bottom: 10px;
`;

export const AddButton = styled(StyledButton)`
    margin-top: 0;
    background: #02b5a5;
    &:hover {
        background: #9bdad4;
    }
`;

export const RemoveButton = styled(StyledButton)`
    margin-top: 0;
`;
