import React, { FunctionComponent } from "react";
import {
  ButtonArea,
  DivArea,
  FormArea,
  InputArea,
} from "./SignUpFormComponents";

export const Signup: FunctionComponent = () => {
  return (
    <React.Fragment>
      <DivArea className="Main">
      <FormArea>
        <InputArea className="TypeA"type="text"placeholder="Company Name"label="Company Name"name="cName"></InputArea>

        <DivArea className="TypeB">
          <InputArea className="TypeC" type="text"placeholder="Title"label="Title"name="title"></InputArea>
          <InputArea className="TypeD" type="text"placeholder="First Name"label="First Name"name="fName"></InputArea>
          <InputArea className="TypeD"type="text" placeholder="Last Name" label="Last Name" name="lName"></InputArea>
        </DivArea>

        <InputArea className="TypeA"type="text"placeholder="Email Address"label="Email"name="email"></InputArea>

        <DivArea className="TypeB">
          <InputArea className="TypeC"type="date"placeholder="Pin Code"label="Pin Code"name="pCode"></InputArea>
          <InputArea className="TypeD"type="text"placeholder="Mobile Number"label="Mobile"name="mobile"></InputArea>
        </DivArea>

        <InputArea className="TypeA"type="text"placeholder="Password"label="Password"name="pass"></InputArea>
        <InputArea className="TypeA"type="text"placeholder="Confirm Password"label="Confirm Password"name="cPass"></InputArea>
      </FormArea>
      <ButtonArea className="TypeE" message="Submit"></ButtonArea>
      </DivArea>
      
    </React.Fragment>
  );
};


export const LoginForm : FunctionComponent = () => {
  return(
    <React.Fragment> 
      <DivArea className="Main">
      <FormArea>
        <InputArea className="TypeA" type="text"placeholder="Email Address"label="Email" name="email"></InputArea>
        <InputArea className="TypeA" type="password"placeholder="Password"label="Password" name="pass"></InputArea>
      </FormArea>
      <ButtonArea className="TypeE" message="Submit"></ButtonArea>
      </DivArea>
     
    </React.Fragment>
    
  )
}

export const EditProfile : FunctionComponent = () => {
  return(
    <React.Fragment> 
      <DivArea className="Main">
        <FormArea>
          <InputArea className="TypeA" type="text"placeholder="Email Address"label="Email" name="email"></InputArea>
          <DivArea className="TypeB">
            <InputArea className="TypeC" type="text"placeholder="Title"label="Title"name="title"></InputArea>
            <InputArea className="TypeD" type="text"placeholder="First Name"label="First Name"name="fName"></InputArea>
            <InputArea className="TypeD"type="text" placeholder="Last Name" label="Last Name" name="lName"></InputArea>
          </DivArea>
          <DivArea className="TypeB">
            <InputArea className="TypeC"type="text"placeholder="Country"label="Country"name="pCode"></InputArea>
            <InputArea className="TypeD"type="number"placeholder="Mobile Number"label="Mobile"name="mobile"></InputArea>
          </DivArea>
          <DivArea className="TypeB">
            <InputArea className="TypeC" type="text"placeholder="Title"label="gender"name="title"></InputArea>
            <InputArea className="TypeD"type="date"placeholder="Pin Code"label="Date of Birth"name="pCode"></InputArea>
            <InputArea className="TypeD"type="number" placeholder="Last Name" label="Pin Code" name="lName"></InputArea>
          </DivArea>
          <InputArea className="TypeA" type="password"placeholder="Password"label="Password" name="pass"></InputArea>    
        </FormArea>
        <ButtonArea className="TypeE" message="Submit"></ButtonArea>
      </DivArea>
      
    </React.Fragment>
    
  )
}


export const AddProperty : FunctionComponent = () => {
  return(
    <React.Fragment> 
      <DivArea className="Main">
        <FormArea>
          <InputArea className="TypeA" type="text"placeholder="Property Name"label="Name of Property" name="pName"></InputArea>
          <InputArea className="TypeA" type="text"placeholder="Property Address"label="Address of Property" name="pAddress"></InputArea>
          <DivArea className="TypeB">
            <InputArea className="TypeD" type="text"placeholder="City"label="City"name="title"></InputArea>
            <InputArea className="TypeD" type="text"placeholder="State"label="State"name="fName"></InputArea>
            <InputArea className="TypeD"type="number" placeholder="Pin Code" label="Pin Code" name="lName"></InputArea>
          </DivArea>
          <DivArea className="TypeB">
            <InputArea className="TypeC"type="text"placeholder="Country"label="Country"name="pCode"></InputArea>
            <InputArea className="TypeD"type="number"placeholder="Mobile Number"label="Mobile"name="mobile"></InputArea>
          </DivArea>

          <InputArea className="TypeA" type="text" placeholder="Description"label="Description" name="pass"></InputArea>
          <DivArea className="TypeB">
            <InputArea className="TypeD"type="number" placeholder="Property Size(e.g. 2500 sq. ft)" label="Size of Property" name="lName"></InputArea>
            <InputArea className="TypeD"type="text"placeholder="Property Type"label="Type of Property"name="pCode"></InputArea>           
          </DivArea>    
        </FormArea>
        <ButtonArea className="TypeE" message="Submit"></ButtonArea>
      </DivArea>
      
    </React.Fragment>
    
  )
}

