import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { HomePageParentDiv } from '../AllProperties/AllPropertiesStyle';
import PropertyCard from './../AllProperties/AllPropertiesComponent/PropertyCard/PropertyCard';


export interface userPropertyProps {
    activeUser : string|null;
};

type Props = {
    activeUser : string
 }
 
 type userPropIndex = {
     id : number
 }
 
 type userProfileProps = {
     propertyAdded : userPropIndex[];
     id: number;
     firstName: string;
     lastName: string;
     email: string;
     mobile: string;
     gender: string;
     dateOfBirth: string;
     password: string
 }
 
 type PropertiesArgumentType = {
     registrationDateOfProperty: string;
     typeOfProperty: string;
     descriptionOfProperty: string;
     ownerOfProperty: string;
     id: number;
     nameOfProperty: string;
     locationOfProperty: string;
     costOfProperty: string;
 };
 
 let userProfileArr : userProfileProps;
 let userPropertyArr :  userPropIndex[]= []
 let userPropertyData : PropertiesArgumentType[] = [];
 let userPropertyIndex :  number[]= []

export const UserProperty : FunctionComponent<userPropertyProps> = ({activeUser}) => {
    let [DeletePropertyState, setDeletePropertyState] = useState(false);
    useEffect(() => {
        const getData = async () => {
            const url = "http://localhost:8080/users/"+ activeUser ;
            const result = await axios.get(url).then((response) => {
                userProfileArr = response.data;
                userPropertyArr = response.data.propertyAdded;
                console.log(userProfileArr);
            });

            for(var i=0;i<userPropertyArr.length;i++) userPropertyIndex.push(userPropertyArr[i].id);
            for(var i=0;i<userPropertyArr.length;i++){
                const url = "http://localhost:8080/properties/"+  userPropertyIndex[i];
                const result = await axios.get(url).then((response) => {
                    let flag = 0;
                    for(let i=0; i<userPropertyData.length;i++){
                        if(userPropertyData[i].id === response.data.id) flag=1;
                    }

                    if(flag === 0)userPropertyData.push(response.data);
                });
            }
            //console.log(userPropertyData);
            if (DeletePropertyState === true) {
                setDeletePropertyState(false);
              } else {
                setDeletePropertyState(true);
            }
        };
        
        getData();
    }, []);


    function removePropertyHandler(id: number) {
        
      }
    
    return(
        <HomePageParentDiv>
            {userPropertyData.map(function (property: PropertiesArgumentType) {
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