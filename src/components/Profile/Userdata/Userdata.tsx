import React from 'react'
import {UserDetails, UniqueDetail} from './Userdatastyles'

type user = {
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

export const Userdata = (props : user) => {
  return (
          <UserDetails>
            <UniqueDetail>
                First Name:{props.firstName}
            </UniqueDetail>
            <UniqueDetail>
                Last Name:{props.lastName}
            </UniqueDetail>
            <UniqueDetail>
                email:{props.email}
            </UniqueDetail>
            <UniqueDetail>
                mobile:{props.mobile}
            </UniqueDetail>
            <UniqueDetail>
                Date of birth:{props.dateOfBirth}
            </UniqueDetail>
          </UserDetails>
  )
}