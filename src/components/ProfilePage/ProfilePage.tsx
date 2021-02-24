import React from 'react';
import {ProfileCard,ProfileContainer,ProfileImage,DetailsComponent,DetailsContainerRow} from './ProfilePageStyleComponents';


type ProfileProps={
    firstName:string;
    lastName:string;
    email:string;
    mobile:string;
    gender:string;
    dateOfBirth:string;

}

const ProfilePage=(props:ProfileProps)=>{
    let image_url="https://picsum.photos/450/450?random=" + Math.random().toString();
    return (
        <ProfileContainer>

            <ProfileCard>
                
                <ProfileImage  src={image_url}/>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center", fontSize:"120%", margin:"2%"}}><h1>Welcome Back, {props.firstName}!</h1></div>

                
                
                <DetailsContainerRow >
                    <div style={{width:"20%"}}><h2>Name:</h2></div>
                    <DetailsComponent>{props.firstName} {props.lastName}</DetailsComponent>

                </DetailsContainerRow>
                <DetailsContainerRow >
                    <div style={{width:"20%"}}><h2>Email:</h2></div>
                    <DetailsComponent>{props.email} </DetailsComponent>

                </DetailsContainerRow>
                <DetailsContainerRow >
                    <div style={{width:"20%"}}><h2>Mobile:</h2></div>
                    <DetailsComponent>{props.mobile}</DetailsComponent>

                </DetailsContainerRow>
                <DetailsContainerRow >
                    <div style={{width:"20%"}}><h2>Gender:</h2></div>
                    <DetailsComponent>{props.gender}</DetailsComponent>

                </DetailsContainerRow>
                <DetailsContainerRow >
                    <div style={{width:"20%"}}><h2>DOB:</h2></div>
                    <DetailsComponent>{props.dateOfBirth}</DetailsComponent>

                </DetailsContainerRow>


                
            </ProfileCard>

        </ProfileContainer>    





    )

}

export default ProfilePage;