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
    width : 80%;
    padding-top : 20px;
    display : flex;
    justify-content : space-around;
    flex-direction : row;  
`;

export const TabTitleButton = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius : 10px;
    outline : none;

    &:focus{
        border:1px solid red;
    }
`;

export const ProfileCard=styled.div`
width:40%;
height:90%;
background-color:#DCDCDC;
border-radius:4px;
display:flex;
flex-direction:column;
align-items:center;
min-width:500px;
@media (max-width: 624px) {
    min-width:0px;
    width:85%;
  }

  @media (max-width: 420px) {
    min-width:0px;
    width:95%;
  }
  

`

export const ProfileContainer=styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
padding-top : 10px;
`;

export const ProfileImage=styled.img`

height:30%;
margin:2%;
border-radius: 50%;
@media (max-width: 624px) {
    height:27%;
  }


`

export const DetailsComponent=styled.div`
background-color:#F5F5F5;
border: 1px solid black;
border-radius:3px;
padding:0.5%;
font-size:120%;
width:80%;

`

export const DetailsContainerRow=styled.div`
margin:3%;
display:flex;
width:70%;
`