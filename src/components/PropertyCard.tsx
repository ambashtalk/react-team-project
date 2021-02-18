import React from 'react'
import styled from 'styled-components'
import DeletePropertyButton from './DeletePropertyButton'

type CardProps = {
    nameOfProperty:string,
    locationOfProperty:string,
    costOfProperty:string,
    activeUser:string,
    idUser:string,
    removePropertyHandler:(id:string) => void
  }

const PropertyDetails=styled.div`
display:flex;
flex-direction:column;
font-size:2rem;
justify-content:center;
`
const CardHolder=styled.div`
display:flex;
flex-direction:row;
border: 1px solid black;
width:20rem;
height:20rem;
justify-content: space-between;
`


const PropertyCard=(props:CardProps)=>{

    return (
        <CardHolder>
            
            
        

            <PropertyDetails>
                <div>
                    

                    Name:{props.nameOfProperty}
                </div>
                <div>
                    
                    Location:{props.locationOfProperty}
                </div>
                <div>
                
                    Cost:{props.costOfProperty}
                </div>
            


            </PropertyDetails>
            <div>
                {props.activeUser==props.idUser?<DeletePropertyButton removePropertyHandler={props.removePropertyHandler}/>:null}
            </div>
        </CardHolder>    
    )

}


export default PropertyCard;
