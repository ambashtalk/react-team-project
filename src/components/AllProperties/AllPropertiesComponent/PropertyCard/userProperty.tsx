import axios from 'axios';
import React, { FunctionComponent, useEffect } from 'react'
import { HomePageParentDiv } from '../../AllPropertiesStyle';
import PropertyCard from './PropertyCard';

type userPropIndex = {
    propertyId : string;

}

type PropertiesArgumentType = {
    registrationDateOfProperty: string;
    typeOfProperty: string;
    descriptionOfProperty: string;
    ownerOfProperty: string;
    id: string;
    nameOfProperty: string;
    locationOfProperty: string;
    costOfProperty: string;
};

export interface userPropertyProps {
    activeUser : string;
    propIndex : string[];
    propertyData : PropertiesArgumentType[];
};

let TotaluserProperty :  PropertiesArgumentType[] = []

export const UserProperty : FunctionComponent<userPropertyProps> = ({activeUser,propIndex,propertyData}) => {
    let userPropertyData :  PropertiesArgumentType[]= []
    useEffect(() => {
        const getData = async () => {
            for(var i=0;i<propIndex.length;i++){
                const url = "http://localhost:8080/properties/"+  propIndex[i];
                const result = await axios.get(url).then(async (response) => {
                    userPropertyData.push(response.data);
                });
            }
            console.log(userPropertyData);
            propertyData =  userPropertyData;
        };
        getData();
    }, [1000]);


    function removePropertyHandler(id: string) {
        // AllPropertiesArray = AllPropertiesArray.filter(function (
        //   property: PropertiesArgumentType
        // ) {
        //   return property.id !== id;
        // });
        // let action = "http://localhost:8080/properties";
        // action = action + "/" + id;
        // //console.log(action);
        // axios.delete(action);
        // if (DeletePropertyState === true) {
        //   setDeletePropertyState(false);
        // } else {
        //   setDeletePropertyState(true);
        // }
      }
    
    return(
        <HomePageParentDiv>
            {propertyData.map(function (property: PropertiesArgumentType) {
                return (
                <PropertyCard
                    typeOfProperty={property.typeOfProperty}
                    descriptionOfProperty={property.descriptionOfProperty}
                    ownerOfProperty={property.ownerOfProperty}
                    registrationDateOfProperty={property.registrationDateOfProperty}
                    id={property.id}
                    activeUser={activeUser}
                    key={property.id}
                    nameOfProperty={property.nameOfProperty}
                    locationOfProperty={property.locationOfProperty}
                    costOfProperty={property.costOfProperty}
                    removePropertyHandler={() => {
                    removePropertyHandler(property.id);
                    }}
                />
                );
            })}
    </HomePageParentDiv>
    )
}