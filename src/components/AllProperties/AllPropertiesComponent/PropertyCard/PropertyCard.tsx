import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DeletePropertyButton from '../DeletePropertyButton/DeletePropertyButton'
import {PropertyDetails,CardHolder,UniquePropertyDetails,PropertyImageStyes,ImageWithDetailsStyles,CardContainer,DetailsHandlerInRow} from './PropertyCardStyles'
import axios, { AxiosResponse } from 'axios'



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
    propertyArray:{registrationDateOfProperty:string,typeOfProperty:string, descriptionOfProperty:string
        ownerOfProperty:string,  id:string, nameOfProperty: string, locationOfProperty: string, costOfProperty: string }[],
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
    console.log(props.propertyArray);

    let imagesource="https://picsum.photos/450/450?random=" + props.id;




        return (
            <CardContainer onClick={givefullviewofproperty} >
                
                
                <CardHolder>
                    <ImageWithDetailsStyles>
                    
                
                   
                        <PropertyDetails>
                            <PropertyImageStyes src={imagesource}></PropertyImageStyes>
                            <UniquePropertyDetails>
                            
                                <DetailsHandlerInRow>
                                    <div>Name:</div>
                                    <div>
                                        {props.nameOfProperty}
                                     

                                    </div>
                                
                                </DetailsHandlerInRow>
                            </UniquePropertyDetails>
                            <UniquePropertyDetails >
                                <DetailsHandlerInRow>
                                    <div>
                                        Location:

                                    </div>
                                    <div>
                                        {props.locationOfProperty}

                                    </div>
                                </DetailsHandlerInRow>    
                            
                                
                            </UniquePropertyDetails>
                            <UniquePropertyDetails >
                                <DetailsHandlerInRow>

                                    <div>
                                        Cost:

                                    </div>
                                    <div>
                                        {props.costOfProperty}

                                    </div>
                                </DetailsHandlerInRow>    
                        
                                
                            </UniquePropertyDetails>

                            {fullPropertyDetailsToggler? <UniquePropertyDetails ><DetailsHandlerInRow><div>Property Type:</div><div>{props.typeOfProperty}</div></DetailsHandlerInRow></UniquePropertyDetails>:null}
                            {fullPropertyDetailsToggler? <UniquePropertyDetails ><DetailsHandlerInRow><div>Description:</div><div>{props.descriptionOfProperty}</div></DetailsHandlerInRow></UniquePropertyDetails>:null}
                            {fullPropertyDetailsToggler? <UniquePropertyDetails ><DetailsHandlerInRow><div>Owner:</div><div>{props.ownerOfProperty}</div></DetailsHandlerInRow></UniquePropertyDetails>:null}
                            {fullPropertyDetailsToggler? <UniquePropertyDetails ><DetailsHandlerInRow><div>Registration Date:</div><div>{props.registrationDateOfProperty}</div></DetailsHandlerInRow></UniquePropertyDetails>:null}
                            

                
        
        
                         </PropertyDetails>
                        <div>
                            {props.activeUser==props.ownerOfProperty?<DeletePropertyButton removePropertyHandler={props.removePropertyHandler}/>:null}
                        </div>
                    </ImageWithDetailsStyles>
                </CardHolder>
            
            </CardContainer>

        )
            

    }


export default PropertyCard;
