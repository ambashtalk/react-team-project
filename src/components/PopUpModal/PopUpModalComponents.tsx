import React, { FunctionComponent, useEffect } from "react";
import { ConfirmationButtons, Message, NoButton, YesButton } from "./PopUpModalStyles";
import FocusLock from "react-focus-lock";
import ReactDOM from "react-dom";

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from "./PopUpModalStyles";

interface ConfirmationModalProps {
  message: JSX.Element;
}

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (props) => {
  return (
    <React.Fragment>
      <Message>{props.message}</Message>
      {/* <ConfirmationButtons>
        <YesButton onClick={props.onConfirm}>Yes</YesButton>
                <NoButton onClick={props.onCancel}>No</NoButton>
      </ConfirmationButtons> */}
    </React.Fragment>
  );
};

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);

    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide} />
      <FocusLock>
        <Wrapper aria-modal aria-labelledby={headerText}tabIndex={-1}role="dialog">
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton onClick={hide}>X</CloseButton>
            </Header>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
