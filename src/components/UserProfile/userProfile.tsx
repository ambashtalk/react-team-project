import axios from 'axios';
import React, {ReactElement, useCallback, useEffect, useState} from 'react'
import AllProperties from '../AllProperties/AllProperties';
import {UserProperty} from '../AllProperties/AllPropertiesComponent/PropertyCard/userProperty'
import { Signup } from '../SignUpForm/SignUpForm'
import { TabTitleArea, TabTitleButton } from './profile.style'
import { Tab, Tabs } from './userProfileComponents'

type Props = {
   activeUser : string
}

type userPropIndex = {
    propertyId : string
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


let userPropertyArr :  userPropIndex[]= []
let userPropertyData : PropertiesArgumentType[] = [];
let userPropertyIndex :  string[]= []
export const TabArea: React.FC<Props> = ({activeUser}) => {
    useEffect(() => {
        const getData = async () => {
            const url = "http://localhost:8080/users/"+ activeUser ;
            console.log(url);
            const result = await axios.get(url).then((response) => {
                userPropertyArr = response.data.propertyAdded;
            });

            for(var i=0;i<userPropertyArr.length;i++) userPropertyIndex.push(userPropertyArr[i].propertyId);
            for(var i=0;i<userPropertyArr.length;i++){
                const url = "http://localhost:8080/properties/"+  userPropertyIndex[i];
                const result = await axios.get(url).then(async (response) => {
                    userPropertyData.push(response.data);
                });
            }
            console.log(userPropertyData);
            
        };
        
        getData();
    }, []);

  return (
    <Tabs>
        <Tab title="Profile">{<Signup />}</Tab>
        <Tab title="Properties">{<UserProperty activeUser={activeUser} propIndex={userPropertyIndex} propertyData={userPropertyData}/>}</Tab>       
    </Tabs>
  )
}
