import React, { FunctionComponent, useState, MouseEvent, FormEvent } from "react";
import { Redirect, useHistory } from "react-router-dom";
import {
  FormButton,
  FormInputRow,
  SignUpFormContainer,
  FormInputField,
} from "./SignUpFormComponents";


type signUpForm_proptype = {
  toogleUserIsLoggedIn: ()=>void;
}

export type formData_type = {
  [key: string] : any
}
export const SignUpForm: FunctionComponent<signUpForm_proptype> = (props) => {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const setFormField = (event: any) => {
    event.preventDefault();
    
    let newState = {};
    for(let i=0; i<event.target.length-1; i++) {
      newState = {
        ...newState,
        [event.target[i].name]: event.target[i].value
      } 
    }    
    setFormData(newState);
    
    //Send data for validation and commit to database

    //Redirect to Login
    props.toogleUserIsLoggedIn();
    history.push("/");
  }
  
  return (
    <>
      <SignUpFormContainer onSubmit={setFormField}>
        <FormInputRow className="TypeB">
          <FormInputField
            className="TypeC"
            type="text"
            placeholder="Title"
            label="Title"
            name="title"
          ></FormInputField>
          <FormInputField
            className="TypeD"
            type="text"
            placeholder="First Name"
            label="First Name"
            name="firstName"
          ></FormInputField>
          <FormInputField
            className="TypeD"
            type="text"
            placeholder="Last Name"
            label="Last Name"
            name="lastName"
          ></FormInputField>
        </FormInputRow>

        <FormInputField
          className="TypeA"
          type="text"
          placeholder="Username"
          label="Username"
          name="userName"
        ></FormInputField>

        <FormInputField
          className="TypeA"
          type="text"
          placeholder="Email Address"
          label="Email"
          name="email"
        ></FormInputField>

        <FormInputRow className="TypeB">
          <FormInputField
            className="TypeC"
            type="date"
            placeholder="Pin Code"
            label="Pin Code"
            name="pCode"
          ></FormInputField>

          <FormInputField
            className="TypeD"
            type="text"
            placeholder="Mobile Number"
            label="Mobile"
            name="mobile"
          ></FormInputField>
        </FormInputRow>

        <FormInputField
          className="TypeA"
          type="text"
          placeholder="Password"
          label="Password"
          name="pass"
        ></FormInputField>

        <FormInputField
          className="TypeA"
          type="text"
          placeholder="Confirm Password"
          label="Confirm Password"
          name="cPass"
        ></FormInputField>

        <FormButton className="TypeE" >SignUp</FormButton>
      </SignUpFormContainer>
    </>
  );
};
