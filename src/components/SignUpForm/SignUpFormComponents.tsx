import React, { FunctionComponent, useState } from "react";
import { Signup } from "./SignUpForm";
import { ConfirmationModal, Modal } from "../PopUpModal/PopUpModalComponents";
import { useModal } from "../PopUpModal/PopUpModal";

import {
  ButtonField,
  DivField,
  FormField,
  InputField,
  Label,
  FloatButton,
  SelectField,
  OptionField
} from "./SignUpFormStyle";




export const FloatButtonArea: FunctionComponent<{}> = () => {
  const { isShown, toggle } = useModal();

  return (
    <React.Fragment>
      <FloatButton onClick={toggle} title="Add Property"></FloatButton>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Edit Profile"
        modalContent={<ConfirmationModal message={<Signup />} />}
      />
    </React.Fragment>
  );
};

export interface ButtonProps {
  className: string;
  message: string;
  mandatoryfielderror:(e:any)=>void
  //clickMe : () => void ;
}


export const ButtonArea: FunctionComponent<ButtonProps> = ({
  className,
  message,
  mandatoryfielderror
}) => {
  return (
    <DivArea className={className}>
      <ButtonField onClick={(event)=>{mandatoryfielderror(event)}}>{message}</ButtonField>
    </DivArea>
  );
};

export interface DivProps {
  className: string;
}

export const DivArea: FunctionComponent<DivProps> = (props) => {
  return <DivField className={props.className}>{props.children}</DivField>;
};

export interface FormProps {
  children?: JSX.Element | null;
 
}

export const FormArea = React.forwardRef((props:FormProps,ref:React.ForwardedRef<HTMLFormElement>) => {
  return <FormField ref={ref}>{props.children}</FormField>;
});

type InputProps= {
  className: string;
  // error: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  children?: JSX.Element | null;
  emailvalidator?:()=>void
  
  
}


export const InputArea = React.forwardRef((props:InputProps,ref:React.ForwardedRef<HTMLInputElement> ) => {


  return (
    <DivArea className={props.className}>
      <Label>{props.label}</Label>
      <InputField
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        ref={ref}
        onBlur={()=>{return (props.emailvalidator?props.emailvalidator():null)}}
        
        
      ></InputField>
      {props.children?props.children:null}
      {/* <Span>{error}</Span> */}
    </DivArea>
  );
});
