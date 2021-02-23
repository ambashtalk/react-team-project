import axios from "axios";
import React, { FunctionComponent,useRef, useState } from "react";
import {
  ButtonArea,
  DivArea,
  FormArea,
  InputArea,
} from "./SignUpFormComponents";
import {SelectField,OptionField,Label} from './SignUpFormStyle';

export const Signup: FunctionComponent = () => {
  let firstNameref=useRef<HTMLInputElement>(null);
  let Emailref=useRef<HTMLInputElement>(null);
  let Mobileref=useRef<HTMLInputElement>(null);
  let Passwordref=useRef<HTMLInputElement>(null);
  let ConfirmPasswordref=useRef<HTMLInputElement>(null);
  let lastNameref=useRef<HTMLInputElement>(null);
  let dobref=useRef<HTMLInputElement>(null);
  let formref=useRef<HTMLFormElement>(null);
  let [mandatoryErrorDiv,setmandatoryErrorDiv]=useState(false);
  let [emailValidator,setemailValidator]=useState(true);
  let [passwordMatch,setpasswordMatch]=useState(true);
  let [mobilenumbercheck,setmobilenumbercheck]=useState(true);

  function matchpassword(){
   // console.log("running");
    if(Passwordref && Passwordref.current && ConfirmPasswordref && ConfirmPasswordref.current){
      if(Passwordref.current.value !== ConfirmPasswordref.current.value){
        Passwordref.current.style.borderColor="red";
        ConfirmPasswordref.current.style.borderColor="red";
        setpasswordMatch(false);
        return false;
      }
      else{
        Passwordref.current.style.borderColor="#88bee6";
        ConfirmPasswordref.current.style.borderColor="#88bee6";
        setpasswordMatch(true);
        return true;

      }

    }
  }

  

  function validateEmail() {
   // console.log("reached");
    //console.log(Emailref)
    
    
    if(Emailref!==null && Emailref.current!==null && Emailref.current.value.length>0){
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     // console.log("level2.1")
    //  console.log(Emailref.current.value)
      let email_string=Emailref.current.value;
      //console.log(email_string)
      let check=validRegex.test(email_string);
     // console.log(check);
    if(check){
      //console.log("level2")
      if(Emailref.current){
      Emailref.current.style.borderColor="#88bee6";}

      setemailValidator(true);
      return true;
      
    }
    else{
      if(Emailref.current){
      Emailref.current.style.borderColor="red";}
      setemailValidator(false);
      return false;
    }
  }
  
    
}

  function mandatoryfielderror(e:any){
    e.preventDefault();
    let check3=true;
    if(Mobileref && Mobileref.current && Mobileref.current.value.length>0){
      for(let i=0;i<Mobileref.current.value.length;i++){
        if(Mobileref.current.value.charCodeAt(i)<48 || Mobileref.current.value.charCodeAt(i)>57){
          check3=false;
          
        }
        
      }
      if(check3==false){
        Mobileref.current.style.borderColor="red";
        setmobilenumbercheck(false);
      }
      else{
        Mobileref.current.style.borderColor="#88bee6";

        setmobilenumbercheck(true);
      }
      

    } 

    let check_password=matchpassword();
    let check=0;
    if(firstNameref.current?.value.length==0){
      firstNameref.current.style.borderColor="red";
      check=1;
    }
    else{
      if(firstNameref.current)
      firstNameref.current.style.borderColor="#88bee6";

    }
    if(Emailref.current?.value.length==0){
      Emailref.current.style.borderColor="red";
      check=1;

    }
    else{
      if(Emailref.current)
      Emailref.current.style.borderColor="#88bee6";
    }
    if(dobref.current?.value.length==0){
      dobref.current.style.borderColor="red";
      check=1;
    }
    else{
      if(dobref.current)
      dobref.current.style.borderColor="#88bee6";
    }
    if(Mobileref.current?.value.length==0){
      Mobileref.current.style.borderColor="red";
      check=1
    }
    else{
      if(Mobileref.current && check3==true)
      Mobileref.current.style.borderColor="#88bee6";
    }
    if(Passwordref.current?.value.length==0){
      Passwordref.current.style.borderColor="red";
      check=1
    }
    else{
      if(Passwordref.current)
      Passwordref.current.style.borderColor="#88bee6";
    }
    if(ConfirmPasswordref.current?.value.length==0){
      ConfirmPasswordref.current.style.borderColor="red";
      check=1;
    }
    else{
      if(ConfirmPasswordref.current)
      ConfirmPasswordref.current.style.borderColor="#88bee6";
    }


    

    
    if(check==1){
      setmandatoryErrorDiv(true);}
    else{
      setmandatoryErrorDiv(false);
    }
    
   let validemailcheck=validateEmail();


    if(check_password==true && check==0 && check3==true && validemailcheck==true){
      if(formref.current){
      const data = new FormData(formref.current);
      const value = Object.fromEntries(data.entries());
      let user_id=Math.random();
      let final_user_id=user_id.toString();
      value.id=final_user_id;
      delete value.cPass;
      var user_details={
        propertyAdded:[],
        ...value

      }

      
      
      console.log(user_details)

      axios.post("http://localhost:8080/users",user_details);
      let action="http://localhost:3000/";
      formref.current.action=action;
      formref.current.submit();




      }
    }


    
    

    
     

      
      

    
    


  }






  


  return (

    <React.Fragment>
   
      <FormArea ref={formref}>
        <div>

        
        {mandatoryErrorDiv?<div style={{display:"flex" , justifyContent:"center" ,color:"red"}}><h2>Please Enter All Mandatory Fields</h2></div>:null}
       

        <DivArea className="TypeB">
          
          <InputArea
            className="TypeD"
            type="text"
            placeholder="First Name"
            label="First Name"
            name="firstName"
            ref={firstNameref}
            
          ></InputArea>
          <InputArea
            className="TypeD"
            type="text"
            placeholder="Last Name"
            label="Last Name"
            name="lastName"
            ref={lastNameref}
          ></InputArea>
        </DivArea>
        <DivArea className="TypeB">

          <InputArea
            className="TypeC"
            type="text"
            placeholder="Email Address"
            label="Email"
            name="email"
            ref={Emailref}
            emailvalidator={validateEmail}
            
          >{emailValidator?<div></div>:<div style={{color:"red"}}><h3>Invalid Email</h3></div>}</InputArea>
          <DivArea className="TypeC">
            <Label>Gender</Label>
            <SelectField name ="gender">
              <OptionField  value="Male">
                Male
              </OptionField>
              <OptionField  value="Female">
                Female
              </OptionField>
              <OptionField value="Others">
                Others
              </OptionField>

            </SelectField>
          </DivArea>
          
          
          
          
        </DivArea>  

        <DivArea className="TypeB">
          <InputArea
            className="TypeC"
            type="date"
            placeholder="Date of Birth"
            label="Date of Birth"
            name="dateOfBirth"
            ref={dobref}

          ></InputArea>
          <InputArea
            className="TypeD"
            type="text"
            placeholder="Mobile Number"
            label="Mobile"
            name="mobile"
            ref={Mobileref}
          >{mobilenumbercheck?null:<div style={{color:"red"}}><h3>Mobile Number Invalid</h3></div>}</InputArea>
        </DivArea>

        <InputArea
          className="TypeA"
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          ref={Passwordref}
        ></InputArea>
        <InputArea
          className="TypeA"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
          name="cPass"
          ref={ConfirmPasswordref}
        >{passwordMatch?null:<div style={{color:"red"}}><h3>Confirm Password is not Matching with Password</h3></div>}</InputArea>
        </div>
      </FormArea>
      <ButtonArea className="TypeE" message="Submit" mandatoryfielderror={(e: any)=>{ mandatoryfielderror(e)}}></ButtonArea>
    </React.Fragment>
  );
};
