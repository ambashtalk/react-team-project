import React,{FunctionComponent} from "react";
import { Signup } from "../../containers/Saurabh/signup";
import { ConfirmationModal, Modal } from "../saurabhModel/popUpModel";
import { useModal } from "../saurabhModel/useModal";

import { ButtonField, DivField, FormField, InputField, Label , FloatButton}  from "./saurabh.style";


export const FloatButtonArea : FunctionComponent<{}> = () => {
    const { isShown, toggle } = useModal();
  
    return (
      <React.Fragment>
          <FloatButton onClick={toggle} title="Add Property"></FloatButton>
          <Modal isShown={isShown} hide={toggle} headerText='Edit Profile' modalContent={<ConfirmationModal message={<Signup />} />} />
      </React.Fragment>
  
        
    );
    
}

export interface ButtonProps {
    className : string;
    message : string;
    //clickMe : () => void ;
}

export const ButtonArea : FunctionComponent<ButtonProps> = ({className,message,}) => {

    return(
        <React.Fragment>
            <DivArea className={className}>
                <ButtonField >{message}</ButtonField>
            </DivArea>
        </React.Fragment>
    );
}

export interface DivProps {
    className : string;
}

export const DivArea : FunctionComponent<DivProps> = (props) => {
   return (
       <React.Fragment>
            <DivField className={props.className}>
                {props.children}
            </DivField>
       </React.Fragment>
    );
};

export interface FormProps {
}

export const FormArea : FunctionComponent<FormProps> = (props) => {
    return(
            <React.Fragment>
                <FormField>
                    {props.children}
                </FormField>
            </React.Fragment>
            
        );
};

export interface InputProps {
    className : string;
    // error: string;
    label : string;
    type : string;
    name : string;
    placeholder : string;
}

export const InputArea : FunctionComponent<InputProps> = ({className,label,type,name,placeholder}) => {
   return(
    <React.Fragment>
        <DivArea className={className}>
            <Label>{label}</Label>
            <InputField type={type} placeholder={placeholder} name={name} ></InputField> 
            {/* <Span>{error}</Span> */}
        </DivArea>
    </React.Fragment>
   );
};
