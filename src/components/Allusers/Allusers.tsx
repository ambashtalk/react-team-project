import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Users from './Alluserscomponents/Users';
import { HomePageParentDiv } from '../AllProperties/AllPropertiesStyle';

type AllUsersactivity = {
    activeUser: string;
  };

  type UserpropsType = {
    id:string,
    firstname:string,
    lastname:string,
    email:string,
    mobile:string,
    gender:string,
    date_of_birth:string,
    password:string,
    propertyadded:string,
}

let AllUsersArray: UserpropsType[] = [];

const AllUsers = (props: AllUsersactivity) => {
    let [Edituserstate, setEdituserstate] = useState(true);

    useEffect(() => {
        const getData = async () => {
          const result = await axios
            .get("http://localhost:8080/properties")
            .then((response) => {
              AllUsersArray = response.data;
            });
    
          if (Edituserstate === true) {
            setEdituserstate(false);
          } else {
            setEdituserstate(true);
          }
        };
        getData();
      }, []);
    
      function editdetailsHandler(id: string) {
        AllUsersArray = AllUsersArray.filter(function (
          user: UserpropsType
        ) {
          return user.id !== id;
        });
        let action = "http://localhost:8080/users";
        action = action + "/" + id;
        //console.log(action);
        axios.delete(action);
        if (Edituserstate === true) {
          setEdituserstate(false);
        } else {
          setEdituserstate(true);
        }
      }

return (
  <HomePageParentDiv>
    {
      AllUsersArray.map(function(user:UserpropsType) {
        return(
          <Users
            id={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            mobile={user.mobile}
            gender={user.gender}
            date_of_birth={user.date_of_birth}
            password={user.password}
            propertadded={user.propertyadded}
            editdetailsHandler={() =>{
              editdetailsHandler(user.id);
            }}
          />
        );
      })
    }
  </HomePageParentDiv>
  );
};

export default AllUsers;