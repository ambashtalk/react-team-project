import React, {useEffect} from 'react';
import axios from 'axios';
import {HomePageParentDiv} from './ProfileStyles'
import {Userdata} from './Userdata/Userdata'

type Useractivity = {
    activeuser:string
}
type userdetails ={
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    mobile:string,
    gender:string,
    dateOfBirth:string,
    password:string,
    propertyAdded:string
}

let Userdetailsarray: userdetails[] = [];

const Profile = (props:Useractivity) => {
    useEffect(() => {
        const getData = async () => {
            const result = await axios
            .get("http://localhost:8080/users")
            .then((response) => {
                Userdetailsarray = response.data;
            });
        };
        getData();
    }, []);

    return(
        <HomePageParentDiv>
            {Userdetailsarray.map(function (user: userdetails) {
            return (
            <Userdata
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                mobile={user.mobile}
                gender={user.gender}
                dateOfBirth={user.dateOfBirth}
                password={user.password}
                propertyAdded={user.propertyAdded}
          />
        );
      })}
    </HomePageParentDiv>
    )
}

export default Profile;