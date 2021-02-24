import axios from 'axios';
import React, {ReactElement, useCallback, useEffect, useState} from 'react'
import { AddProperty } from '../SignUpForm/SignUpForm';
import { ProfilePage } from './profileCard';
import { Tab, Tabs } from './profileComponents'
import { UserProperty } from './PropertyCard';


type Props = {
   activeUser : string
}

type userPropIndex = {
    id : string
}

type userProfileProps = {
    propertyAdded : userPropIndex[];
    id: string;
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
    id: string;
    nameOfProperty: string;
    locationOfProperty: string;
    costOfProperty: string;
};

let userProfileArr : userProfileProps;
let userPropertyArr :  userPropIndex[]= []
let userPropertyData : PropertiesArgumentType[] = [];
let userPropertyIndex :  string[]= []


export const TabArea: React.FC<Props> = ({activeUser}) => {
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
                const result = await axios.get(url).then(async (response) => {
                    userPropertyData.push(response.data);
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

  return (<div></div>
    // <Tabs>
    //     <Tab title="Profile">
            
    //        <ProfilePage data={userProfileArr} HeaderText="Add Property" comp={<AddProperty activeUser={localStorage.getItem('activeUser') ? localStorage.getItem('activeUser') : "0"}/>}></ProfilePage>
            
    //     </Tab>
    //     <Tab title="Properties">{<UserProperty activeUser={activeUser ? activeUser : "0"} propIndex={userPropertyIndex} propertyData={userPropertyData}/>}</Tab>       
    // </Tabs>
  )
}
