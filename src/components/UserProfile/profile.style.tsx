import styled from 'styled-components';

export const TabContent = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;  
`;

export const TabTitleArea = styled.div`
    display : flex;
    justify-content : space-around;
    flex-direction : row;  
    padding : 5px 5px 0px 5px;
    border-bottom : 1px solid black;
`;

export const TabBodyArea = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : column;  
`;

export const TabTitleButton = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius : 10px;
    outline : none;

    &:focus{
        border:1px solid red;
    }
`;