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
  StyledEditProfileFormContainer,
  StyledLoginFormContainer,
  StyledAddPropertyFormContainer,
} from "./SignUpFormStyle";
import { HeaderText } from "../PopUpModal/PopUpModalStyles";

type FloatProps = {
  HeaderText : string,
  comp : JSX.Element,
}

export const FloatButtonArea: FunctionComponent<FloatProps> = ({HeaderText,comp}) => {
  const { isShown, toggle } = useModal();

  return (
    <>
      <FloatButton onClick={toggle} title="Add Property"></FloatButton>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText={HeaderText}
        modalContent={<ConfirmationModal message={comp} />}
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

type LoginFormContainer_proptype = {
  onSubmit: (event: FormEvent) => void;
};

type EditProfileContainer_proptype = {
  onSubmit: (event: FormEvent) => void;
};
type AddPropertyContainer_proptype = {
  onSubmit: (event: FormEvent) => void;
};

export const SignUpFormContainer: FunctionComponent<SignUpFormContainer_proptype> = (props) => {
  return <StyledSignUpFormContainer onSubmit={props.onSubmit}>{props.children}</StyledSignUpFormContainer>;
};

export const LoginFormContainer: FunctionComponent<LoginFormContainer_proptype> = (props) => {
  return <StyledLoginFormContainer onSubmit={props.onSubmit}>{props.children}</StyledLoginFormContainer>;
};

export const EditProfileContainer: FunctionComponent<EditProfileContainer_proptype> = (props) => {
  return <StyledEditProfileFormContainer onSubmit={props.onSubmit}>{props.children}</StyledEditProfileFormContainer>;
};

export const AddPropertyContainer: FunctionComponent<AddPropertyContainer_proptype> = (props) => {
  return <StyledAddPropertyFormContainer onSubmit={props.onSubmit}>{props.children}</StyledAddPropertyFormContainer>;
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
