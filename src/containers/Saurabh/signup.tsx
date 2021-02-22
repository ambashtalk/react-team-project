import React, { Component, FunctionComponent } from "react";
import { ButtonArea, DivArea, FormArea, InputArea } from "../../components/saurabhForm/FormComponents";

export const Signup: FunctionComponent = () => {
  
  return (
     <React.Fragment>
                    <FormArea>

                      <InputArea className="TypeA" type="text" placeholder="Company Name" label="Company Name" name="cName" ></InputArea>
                        
                        <DivArea className="TypeB">
                            <InputArea className="TypeC" type="text" placeholder="Title" label="Title" name="title" ></InputArea>
                            <InputArea className="TypeD" type="text" placeholder="First Name" label="First Name" name="fName" ></InputArea>
                            <InputArea className="TypeD" type="text" placeholder="Last Name" label="Last Name" name="lName" ></InputArea>
                        </DivArea>
                      
                        <InputArea className="TypeA" type="text" placeholder="Email Address" label="Email" name="email" ></InputArea>                    

                        <DivArea className="TypeB">
                            <InputArea className="TypeC" type="date" placeholder="Pin Code" label="Pin Code" name="pCode"></InputArea>
                            <InputArea className="TypeD" type="text" placeholder="Mobile Number" label="Mobile" name="mobile"></InputArea>
                        </DivArea>

                        <InputArea className="TypeA" type="text" placeholder="Password" label="Password" name="pass" ></InputArea>
                        <InputArea className="TypeA" type="text" placeholder="Confirm Password" label="Confirm Password" name="cPass" ></InputArea>

                    </FormArea>
                    <ButtonArea className="TypeE" message="Submit"></ButtonArea>
                
      </React.Fragment>
  );
  };