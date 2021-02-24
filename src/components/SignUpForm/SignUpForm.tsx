import { Console } from "console";
import React, {
  FunctionComponent,
  useState,
  MouseEvent,
  FormEvent,
  useEffect,
} from "react";
import { Redirect, useHistory } from "react-router-dom";
import { getRequest, postRequest, putRequest } from "../../shared/service";
import { PropertyImageStyes } from "../AllProperties/AllPropertiesComponent/PropertyCard/PropertyCardStyles";
import {
  StyledUserOptionAndLink,
  StyledUserOptionAndLinkForm,
} from "../TitleBar/TitleBarStyles";
import {
  FormButton,
  FormInputRow,
  SignUpFormContainer,
  FormInputField,
  LoginFormContainer,
  EditProfileContainer,
} from "./SignUpFormComponents";

type signUpForm_proptype = {
  toogleUserIsLoggedIn: () => void;
  makeActive: (id: string | null) => void;
  activeUser: string | null;
};
type AddPropertyForm_proptype = {
  activeUser: string | null;
};

export type formData_type = {
  [key: string]: any;
};

let uniqueId: Number;

export const SignUpForm: FunctionComponent<signUpForm_proptype> = (props) => {
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const setFormField = (event: any) => {
    event.preventDefault();

    let newState = {};
    for (let i = 0; i < event.target.length - 1; i++) {
      newState = {
        ...newState,
        [event.target[i].name]: event.target[i].value,
      };
    }
    setFormData(newState);
    getUniqueId(newState);
  };

  function getUniqueId(newState: formData_type) {
    getRequest("http://localhost:8080/users").then((res) => {
      console.log(res);
      uniqueId = res[res.length - 1].id + 1;
      newState = {
        ...newState,
        id: uniqueId,
        propertyAdded: [],
      };
      console.log(newState);
      postRequest("http://localhost:8080/users", newState).then((res) => {
        // props.toogleUserIsLoggedIn();
        history.push("/login");
      });
    });
  }

  return (
    <>
      <SignUpFormContainer onSubmit={setFormField}>
        <FormInputRow className="TypeB">
          <FormInputField
            className="TypeC"
            type="text"
            placeholder="Gender"
            label="Gender"
            name="gender"
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
          placeholder="Email Address"
          label="Email"
          name="email"
        ></FormInputField>

        <FormInputRow className="TypeB">
          <FormInputField
            className="TypeC"
            type="date"
            placeholder="Date of Birth"
            label="Date of Birth"
            name="dateOfBirth"
          ></FormInputField>
          <FormInputField
            className="TypeD"
            type="number"
            placeholder="Mobile Number"
            label="Telephone"
            name="mobile"
          ></FormInputField>
        </FormInputRow>

        <FormInputField
          className="TypeA"
          type="text"
          placeholder="Password"
          label="Password"
          name="password"
        ></FormInputField>
        <FormInputField
          className="TypeA"
          type="text"
          placeholder="Confirm Password"
          label="Confirm Password"
          name="cpassword"
        ></FormInputField>

        <FormButton className="TypeE">SignUp</FormButton>
        <StyledUserOptionAndLinkForm to="/Login">
          Already a member ? <u>Login</u>
        </StyledUserOptionAndLinkForm>
      </SignUpFormContainer>
    </>
  );
};

export const AddProperty: FunctionComponent<AddPropertyForm_proptype> = (
  props
) => {
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const setFormField = (event: any) => {
    event.preventDefault();

    let newState = {};
    for (let i = 0; i < event.target.length - 1; i++) {
      newState = {
        ...newState,
        [event.target[i].name]: event.target[i].value,
      };
    }
    setFormData(newState);
    getUniqueId(newState);
  };

  function getUniqueId(newState: formData_type) {
    getRequest("http://localhost:8080/properties").then((res) => {
      console.log(res);
      uniqueId = res[res.length - 1].id + 1;
      console.log(res[res.length - 1].id);
      newState = {
        ...newState,
        id: uniqueId,
        // ownerOfProperty: localStorage.getItem("activeUser"),
        ownerOfProperty: props.activeUser,
        registrationDateOfProperty: "12-12-1990",
      };
      console.log(newState);
      postRequest("http://localhost:8080/properties", newState).then((res) => {
        console.log(res);
        updateUserProperty(newState.id);
      });
    });
  }

  function updateUserProperty(data: string) {
    getRequest("http://localhost:8080/users/" + props.activeUser).then(
      (res) => {
        let arr = [];
        arr = res.propertyAdded;
        arr.push({ id: data });

        const value = {
          id: res.id,
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          mobile: res.mobile,
          gender: res.gender,
          dateOfBirth: res.dateOfBirth,
          password: res.password,
          propertyAdded: arr,
        };
        putRequest(
          "http://localhost:8080/users/" + props.activeUser,
          value
        ).then((response) => {
          console.log(response);
          window.location.reload();
        });
      }
    );
  }

  return (
    <EditProfileContainer onSubmit={setFormField}>
      <FormInputField
        className="TypeA"
        type="text"
        placeholder="Property Name"
        label="Name of Property"
        name="nameOfProperty"
      ></FormInputField>
      <FormInputField
        className="TypeA"
        type="text"
        placeholder="Property Address"
        label="Address of Property"
        name="locationOfProperty"
      ></FormInputField>
      {/* <FormInputRow className="TypeB">
            <FormInputField className="TypeD" type="text"placeholder="City"label="City"name="city"></FormInputField>
            <FormInputField className="TypeD" type="text"placeholder="State"label="State"name="state"></FormInputField>
            <FormInputField className="TypeD"type="number" placeholder="Pin Code" label="Pin Code" name="pcode"></FormInputField>
          </FormInputRow>
          <FormInputRow className="TypeB">
            <FormInputField className="TypeC"type="text"placeholder="Country"label="Country"name="country"></FormInputField>
            <FormInputField className="TypeD"type="number"placeholder="Mobile Number"label="Mobile"name="mobile"></FormInputField>
          </FormInputRow> */}

      <FormInputField
        className="TypeA"
        type="text"
        placeholder="Description"
        label="Description"
        name="descriptionOfProperty"
      ></FormInputField>
      <FormInputRow className="TypeB">
        <FormInputField
          className="TypeD"
          type="number"
          placeholder="Property Size(e.g. 2500 sq. ft)"
          label="Size of Property"
          name="costOfProperty"
        ></FormInputField>
        <FormInputField
          className="TypeD"
          type="text"
          placeholder="Property Type"
          label="Type of Property"
          name="typeOfProperty"
        ></FormInputField>
      </FormInputRow>

      <FormButton className="TypeE">Submit</FormButton>
    </EditProfileContainer>
  );
};

type EditProfile_proptype = {
  activeUser: string | null;
}
export const EditProfile: FunctionComponent<EditProfile_proptype> = (props) => {
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const EditProfileFormField = (event: any) => {
    event.preventDefault();
    let newState = {};
    for (let i = 0; i < event.target.length - 1; i++) {
      newState = {
        ...newState,
        [event.target[i].name]: event.target[i].value,
      };
    }
    setFormData(newState);
    getUniqueId(newState);
  };

  function getUniqueId(newState: formData_type) {
    getRequest("http://localhost:8080/users/" + props.activeUser).then(
      (res) => {
        newState = {
          ...newState,
          id: res.id,
          propertyAdded: res.propertyAdded,
        };
        console.log(newState);
        putRequest(
          "http://localhost:8080/users/" + props.activeUser,
          newState
        ).then((res) => {
          console.log(res);
          window.location.reload();
        });
      }
    );
  }

  return (
    <EditProfileContainer onSubmit={EditProfileFormField}>
      <FormInputRow className="TypeB">
        <FormInputField
          className="TypeC"
          type="text"
          placeholder="Gender"
          label="Gender"
          name="gender"
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
        placeholder="Email Address"
        label="Email"
        name="email"
      ></FormInputField>

      <FormInputRow className="TypeB">
        <FormInputField
          className="TypeC"
          type="date"
          placeholder="Date of Birth"
          label="Date of Birth"
          name="dateOfBirth"
        ></FormInputField>
        <FormInputField
          className="TypeD"
          type="number"
          placeholder="Mobile Number"
          label="Telephone"
          name="mobile"
        ></FormInputField>
      </FormInputRow>

      <FormInputField
        className="TypeA"
        type="text"
        placeholder="Password"
        label="Password"
        name="password"
      ></FormInputField>
      <FormButton className="TypeE">Submit</FormButton>
    </EditProfileContainer>
  );
};

export const LoginForm: FunctionComponent<signUpForm_proptype> = (props) => {
  const history = useHistory();
  const [formData, setFormData] = useState({});

  const setLoginFormField = (event: any) => {
    event.preventDefault();
    let newState = {};
    for (let i = 0; i < event.target.length - 1; i++) {
      newState = {
        ...newState,
        [event.target[i].name]: event.target[i].value,
      };
    }
    setFormData(newState);
    getUniqueId(newState);
  };

  function getUniqueId(newState: formData_type) {
    getRequest("http://localhost:8080/users").then((result) => {
      // console.log(result);
      console.log(newState);
      for (var i = 0; i < result.length; i++) {
        console.log("Checking User " + i);
        
        console.log(result[i].email + " === " + newState.email + ": " + (result[i].email === newState.email));
        console.log(result[i].password + " === " + newState.password + ": " + (result[i].password === newState.password));
        if (
          result[i].email === newState.email &&
          result[i].password === newState.password
        ) {
          //  localStorage.setItem('userIsLoggedIn','true');
          console.log("Setting userIsLoggedIn");          
          props.toogleUserIsLoggedIn();
          // localStorage.setItem("activeUser", result[i].id);
          console.log("Setting active user");          
          props.makeActive(result[i].id);
          history.push("/home");
        } else {
          console.log("Wrong Creds");
          
        }
      }
    });
  }

  return (
    <>
      <LoginFormContainer onSubmit={setLoginFormField}>
        <FormInputField
          className="TypeA"
          type="text"
          placeholder="Email Address"
          label="Email"
          name="email"
        ></FormInputField>
        <FormInputField
          className="TypeA"
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
        ></FormInputField>

        <FormButton className="TypeE">Login</FormButton>
        <StyledUserOptionAndLinkForm to="/">
          Not a member? <u>SignUp</u>
        </StyledUserOptionAndLinkForm>
      </LoginFormContainer>
    </>
  );
};
