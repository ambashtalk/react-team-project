import React from 'react'
import styled from 'styled-components'
import DeletePropertyButton from './DeletePropertyButton'

type CardProps = {
    nameOfProperty:string,
    locationOfProperty:string,
    costOfProperty:string,
    removePropertyHandler:(id:string) => void
  }

const PropertyDetails=styled.div`
display:flex;
flex-direction:column;
font-size:27px
`
const CardHolder=styled.div`
display:flex;
flex-direction:row;
border: 1px solid black;
width:100px;
height:100px;
justify-content: space-between;
`


const PropertyCard=(props:CardProps)=>{

    return (
        <CardHolder>
            
            
        

            <PropertyDetails>
                <div>
                    

                    {props.nameOfProperty}
                </div>
                <div>
                    
                    {props.locationOfProperty}
                </div>
                <div>
                
                    {props.costOfProperty}
                </div>
            


            </PropertyDetails>
            <div>
                <DeletePropertyButton removePropertyHandler={props.removePropertyHandler}/>
            </div>
        </CardHolder>    
    )

}


export default PropertyCard;
