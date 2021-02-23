import axios from 'axios';
import React, {ReactElement, useCallback, useEffect, useState} from 'react'
import AllProperties from '../AllProperties/AllProperties';
import {UserProperty} from '../AllProperties/AllPropertiesComponent/PropertyCard/userProperty'
import { Signup } from '../SignUpForm/SignUpForm'
import { DivArea } from '../SignUpForm/SignUpFormComponents';
import { TabTitleArea, TabTitleButton } from './Tabs.style'
import {Div, Img} from './userProf.style'
import { Tab, Tabs } from './userProfileComponents'


type Props = {
   activeUser : string
}

type userPropIndex = {
    propertyId : string
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

            for(var i=0;i<userPropertyArr.length;i++) userPropertyIndex.push(userPropertyArr[i].propertyId);
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

  return (
    <Tabs>
        <Tab title="Profile">
            {/* <DivArea className="Main"> */}
            <Div className="wrapper">

                    <Div className="">
                        <Div className="">
                            <Img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" ></Img>
                        </Div>

                        <Div className="">
                            <Div className="">{DeletePropertyState ? userProfileArr.firstName : "" } {DeletePropertyState ? userProfileArr.lastName : "" }</Div>
                            <Div className="">{DeletePropertyState ? userProfileArr.mobile : "" }</Div>
                            <Div className="">{DeletePropertyState ? userProfileArr.email : "" }</Div>
                            <Div className=""></Div>
                                
                        </Div>  
                    </Div> 
                    <Div className="">
                        <Div className="">
                            <Div className="">
                                <Div className="">1598</Div>
                                <Div className="">Followers</Div>
                            </Div>
                            <Div className="">
                                <Div className="">1598</Div>
                                <Div className="">Followers</Div>
                            </Div>
                            <Div className="">
                                <Div className="">1598</Div>
                                <Div className="">Followers</Div>
                            </Div>
                            <Div className="">
                                <Div className="">1598</Div>
                                <Div className="">Followers</Div>
                            </Div>
                            
                        </Div>
                    </Div>
                     

                </Div>
                {/* <DivArea className="Main">

                    <DivArea className="typeB">
                         <img src="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"></img>
                    </DivArea>
                    <DivArea className="typeA">
                        <Info>{DeletePropertyState ? userProfileArr.id : "" }</Info>
                        <Info>{DeletePropertyState ? userProfileArr.firstName : "" }</Info>
                        <Info>{DeletePropertyState ? userProfileArr.lastName : "" }</Info>
                        <Info>{DeletePropertyState ? userProfileArr.id : "" }</Info>
                        <Info>{DeletePropertyState ? userProfileArr.id : "" }</Info>
                        
                    </DivArea>

                    
                </DivArea> */}
            
        </Tab>
        <Tab title="Properties">{<UserProperty activeUser={activeUser} propIndex={userPropertyIndex} propertyData={userPropertyData}/>}</Tab>       
    </Tabs>
  )
}
