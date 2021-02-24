import React, { useState } from "react";
import defaultUserImage from "../../assets/images/maleProfileImage.jpeg";
import { UserBox } from "./TitleBarComponents";
import { HandelLoginLogout } from "./TitleBarEventHandelers";
import {
  StyledNavbar,
  StyledNavHeading,
  StyledUserDropDown,
  StyledUserImage,
  StyledOptionBox,
  StyledUserOptionAndLink,
  StyledLogoutOption,
  StyledLogoutOptionBox,
  StyledUserName,
  StyledOptionsContainer,
} from "./TitleBarStyles";
type proptype = {
  userIsLoggedIn: string;
  username?: string;
  sessionManager: () => void;
};

const TitleBar: React.FC<proptype> = (props) => {
  const [isClickedDropDownButton, setisClickedDropDownButton] = useState(false);
  const toogleUserDropDownMenu = () => {
    setisClickedDropDownButton((prevState) => !prevState);
  };

  return (
    <StyledNavbar>
      <StyledNavHeading>HOTEL BOOKING</StyledNavHeading>
      <StyledUserDropDown>
        <UserBox clicked={toogleUserDropDownMenu}>
          <StyledUserImage src={defaultUserImage} alt="user_image" />
          <StyledUserName>
            Welcome!{" "}
            {props.userIsLoggedIn === "true" ? "Member" : "Guest"}
          </StyledUserName>
        </UserBox>

        <StyledOptionsContainer showMenu={isClickedDropDownButton}>
          <StyledOptionBox>
            <StyledUserOptionAndLink to="/profile">
              Profile
            </StyledUserOptionAndLink>
          </StyledOptionBox>
          <StyledOptionBox>
            <StyledUserOptionAndLink to="/home">Home</StyledUserOptionAndLink>
          </StyledOptionBox>
          <StyledLogoutOptionBox userIsLoggedIn={props.userIsLoggedIn}>
            <StyledLogoutOption
              onClick={() =>
                HandelLoginLogout(props.userIsLoggedIn, props.sessionManager)
              }
              to={props.userIsLoggedIn === "true" ? "/" : "/"}
            >
              {props.userIsLoggedIn === "true" ? "Logout" : "Login"}
            </StyledLogoutOption>
          </StyledLogoutOptionBox>
        </StyledOptionsContainer>
      </StyledUserDropDown>
    </StyledNavbar>
  );
};

export default TitleBar;
