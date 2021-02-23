import React, { useState } from "react";
import defaultUserImage from "../../assets/images/maleProfileImage.jpeg";
import { UserBox } from "./TitleBarComponents";
import {
  StyledNavbar,
  StyledNavHeading,
  StyledUserDropDown,
  StyledUserImage,
  StyledOptionBox,
  StyledUserOption,
  StyledLogoutOption,
  StyledLogoutOptionBox,
  StyledUserName,
  StyledOptionsContainer,
} from "./TitleBarStyles";
type proptype = {
  userIsLoggedIn?: boolean;
  username?: string;
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
            Welcome! {props.userIsLoggedIn ? props.username : "Guest"}
          </StyledUserName>
        </UserBox>

        <StyledOptionsContainer showMenu={isClickedDropDownButton}>
          <StyledOptionBox>
            <StyledUserOption>Profile</StyledUserOption>
          </StyledOptionBox>
          <StyledOptionBox>
            <StyledUserOption>Properties</StyledUserOption>
          </StyledOptionBox>
          <StyledLogoutOptionBox>
            <StyledLogoutOption>Logout</StyledLogoutOption>
          </StyledLogoutOptionBox>
        </StyledOptionsContainer>
      </StyledUserDropDown>
    </StyledNavbar>
  );
};

export default TitleBar;
