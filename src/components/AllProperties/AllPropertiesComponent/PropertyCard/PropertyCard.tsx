import React, { useState } from 'react'
import styled from 'styled-components'
import DeletePropertyButton from '../DeletePropertyButton/DeletePropertyButton'
import {PropertyDetails,CardHolder,UniquePropertyDetails} from './PropertyCardStyles'



type CardProps = {
    id:string,
    nameOfProperty:string,
    locationOfProperty:string,
    costOfProperty:string,
    activeUser:string,
    
    typeOfProperty:string,
    descriptionOfProperty:string,
    ownerOfProperty:string,
    registrationDateOfProperty:string,
    removePropertyHandler:(id:string) => void
  }



const PropertyCard=(props:CardProps)=>{

let [fullPropertyDetailsToggler,setfullPropertyDetailsToggler]=useState(false);    
function givefullviewofproperty(){
    if(fullPropertyDetailsToggler==false){
        setfullPropertyDetailsToggler(true);}
    else{
        setfullPropertyDetailsToggler(false);


    }
}



    return (
        <div onClick={givefullviewofproperty} style={{margin:"1%", maxHeight:"400px", maxWidth:"400px"}}>
            <CardHolder>
            
                <PropertyDetails>
                    <UniquePropertyDetails>
                    
    
                        Name:{props.nameOfProperty}
                    </UniquePropertyDetails>
                    <UniquePropertyDetails >
                    
                        Location:{props.locationOfProperty}
                    </UniquePropertyDetails>
                    <UniquePropertyDetails >
                
                        Cost:{props.costOfProperty}
                    </UniquePropertyDetails>

                    {fullPropertyDetailsToggler? <UniquePropertyDetails >Property Type:{props.typeOfProperty}</UniquePropertyDetails>:null}
                    {fullPropertyDetailsToggler? <UniquePropertyDetails >Description:{props.descriptionOfProperty}</UniquePropertyDetails>:null}
                    {fullPropertyDetailsToggler? <UniquePropertyDetails >Owner:{props.ownerOfProperty}</UniquePropertyDetails>:null}
                    {fullPropertyDetailsToggler? <UniquePropertyDetails >Registration Date:{props.registrationDateOfProperty}</UniquePropertyDetails>:null}
                    

            
    
    
                </PropertyDetails>
                <div>
                    {props.activeUser==props.ownerOfProperty?<DeletePropertyButton removePropertyHandler={props.removePropertyHandler}/>:null}
                </div>
            </CardHolder>
          
        </div>

    )
        

}


export default PropertyCard;
