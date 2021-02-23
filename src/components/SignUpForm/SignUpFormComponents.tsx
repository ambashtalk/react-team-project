import React, { FunctionComponent } from "react";
import { AddProperty, Signup } from "./SignUpForm";
import { ConfirmationModal, Modal } from "../PopUpModal/PopUpModalComponents";
import { useModal } from "../PopUpModal/PopUpModal";

import {
  ButtonField,
  DivField,
  FormField,
  InputField,
  Label,
  FloatButton,
} from "./SignUpFormStyle";

export const FloatButtonArea: FunctionComponent<{}> = () => {
  const { isShown, toggle } = useModal();

  return (
    <React.Fragment>
      <FloatButton onClick={toggle} title="Add Property"></FloatButton>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Add Property"
        modalContent={<ConfirmationModal message={<AddProperty />} />}
      />
    </React.Fragment>
  );
};

export interface ButtonProps {
  className: string;
  message: string;
  //clickMe : () => void ;
}

export const ButtonArea: FunctionComponent<ButtonProps> = ({
  className,
  message,
}) => {
  return (
    <DivArea className={className}>
      <ButtonField>{message}</ButtonField>
    </DivArea>
  );
};

export interface DivProps {
  className: string;
}

export const DivArea: FunctionComponent<DivProps> = (props) => {
  return <DivField className={props.className}>{props.children}</DivField>;
};

export interface FormProps {}

export const FormArea: FunctionComponent<FormProps> = (props) => {
  return <FormField>{props.children}</FormField>;
};

export interface InputProps {
  className: string;
  // error: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

export const InputArea: FunctionComponent<InputProps> = ({
  className,
  label,
  type,
  name,
  placeholder,
}) => {
  return (
    <DivArea className={className}>
      <Label>{label}</Label>
      <InputField
        type={type}
        placeholder={placeholder}
        name={name}
      ></InputField>
      {/* <Span>{error}</Span> */}
    </DivArea>
  );
};
