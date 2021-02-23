import styled from 'styled-components';


export const PropertyDetails=styled.div`
display:flex;
flex-direction:column;
font-size:2rem;
justify-content:center;
padding:3%;
width:100%;
margin:0;



`
export const CardHolder=styled.div`
display:flex;
flex-direction:column;
border: 1px hidden black;


justify-content: space-between;



margin:1%;
border-radius:1%;


background-color:#F0F0F0;
box-shadow: 5px 10px #DCDCDC;

`
export const UniquePropertyDetails=styled.div`
width:90%;


overflow-wrap:break-word;
min-width:250px;
margin:2%;
`
export const PropertyImageStyes=styled.img`
width:"90%"

`

export const ImageWithDetailsStyles=styled.div`
display:flex;
flex-direction:row;



padding:6%;

`

export const CardContainer=styled.div`
margin:1%;

width:30%;

min-width:300px;
@media (max-width: 624px) {
    width:80%;
  }

`

export const DetailsHandlerInRow=styled.div`
display:flex;
flex-direction:column;

`
