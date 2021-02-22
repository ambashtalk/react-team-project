import React, { useState } from 'react'
import styled, {createGlobalStyle, css } from 'styled-components'
import { UserPreferences } from 'typescript'
import { Users, Userdetails } from './Users-styles'

type Userprops = {
    userid:string,
    firstname:string,
    lastname:string,
    email:string,
    mobile:string,
    gender:string,
    date_of_birth:string,
    password:string,
    propertyadded:string,

    activeUser:string,
}

const activeUser=(props:Userprops)=>{
    return(
        <Users>
                <Userdetails>User ID:{props.userid}</Userdetails>
                <br/>
                <Userdetails>Name:{props.firstname}+{props.lastname}</Userdetails>
                <br/>
                <Userdetails>email:{props.email}</Userdetails>
                <br/>
                <Userdetails>mobile:{props.mobile}</Userdetails>
                <br/>
                <Userdetails>Gender:{props.gender}</Userdetails>
                <br/>
                <Userdetails>Date of birth:{props.date_of_birth}</Userdetails>
                <br/>
                <Userdetails>Password:{props.password}</Userdetails>
                <br/>
                <Userdetails>Property Added:{props.propertyadded}</Userdetails>
        </Users>
    )
}

export default Users;