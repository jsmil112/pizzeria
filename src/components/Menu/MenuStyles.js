import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const MenuTitle = styled.div`
    font-size: 85px;
    font-weight: 300;
`;

export const MenuCategoriesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 55px;
    width: 75%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

export const MenuCategory = styled.div`
    font-weight: 300;
    font-size: 25px;
    line-height: 25px;
    cursor: pointer;
    ${({isActive}) => isActive && "text-decoration: underline; font-weight: 500;"}
    &:hover{
        text-decoration: underline;
    }
`;

export const ItemsListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 40px;
    @media(min-width: 535px) {
        width: 75%
    }
`;