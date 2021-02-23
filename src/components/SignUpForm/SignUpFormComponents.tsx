import React, { FormEvent, FunctionComponent } from "react";
import { SignUpForm } from "./SignUpForm";
import { ConfirmationModal, Modal } from "../PopUpModal/PopUpModalComponents";
import { useModal } from "../PopUpModal/PopUpModal";
import {
  ButtonField,
  StyledFormInputRow,
  StyledSignUpFormContainer,
  StyledFormInputField,
  Label,
  FloatButton,
} from "./SignUpFormStyle";

export const FloatButtonArea: FunctionComponent<{}> = () => {
  const { isShown, toggle } = useModal();

  return (
    <>
      <FloatButton onClick={toggle} title="Add Property"></FloatButton>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Edit Profile"
        modalContent={<ConfirmationModal message={<h1>Property Form</h1>} />}
      />
    </>
  );
};

type FormButton_proptype = {
  className: string;
};
export const FormButton: FunctionComponent<FormButton_proptype> = (props) => {
  return (
    <FormInputRow className={props.className}>
      <ButtonField >{props.children}</ButtonField>
    </FormInputRow>
  );
};

type FormInputRow_proptype = {
  className: string;
};
export const FormInputRow: FunctionComponent<FormInputRow_proptype> = (props) => {
  return <StyledFormInputRow className={props.className}>{props.children}</StyledFormInputRow>;
};

type SignUpFormContainer_proptype = {
  onSubmit: (event: FormEvent) => void;
};
export const SignUpFormContainer: FunctionComponent<SignUpFormContainer_proptype> = (props) => {
  return <StyledSignUpFormContainer onSubmit={props.onSubmit}>{props.children}</StyledSignUpFormContainer>;
};

type FormInputField_proptype = {
  className: string;
  // error: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
};
export const FormInputField: FunctionComponent<FormInputField_proptype> = ({
  className,
  label,
  type,
  name,
  placeholder,
}) => {
  return (
    <FormInputRow className={className}>
      <Label>{label}</Label>
      <StyledFormInputField
        type={type}
        placeholder={placeholder}
        name={name}
      ></StyledFormInputField>
      {/* <Span>{error}</Span> */}
    </FormInputRow>
  );
};
