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
          <StyledUserName >
            Welcome! {props.userIsLoggedIn ? props.username : "Guest"}
          </StyledUserName>
        </UserBox>
        {isClickedDropDownButton && (
          <>
            <StyledOptionBox>
              <StyledUserOption>Profile</StyledUserOption>
            </StyledOptionBox>
            <StyledOptionBox>
              <StyledUserOption>Properties</StyledUserOption>
            </StyledOptionBox>
            <StyledLogoutOptionBox>
              <StyledLogoutOption>Logout</StyledLogoutOption>
            </StyledLogoutOptionBox>
          </>
        )}

        {/* <StyledUserDropDownMenu>
            <StyledUserProfileImage src={defaultUserImage} alt="UserImage" />
          <UserDropDownButton clicked={toogleUserDropDownMenu}>
            Welcome! {props.userIsLoggedIn ? props.username : "Guest"}
          </UserDropDownButton>

          <StyledUserDropDownItems
            isClickedDropDownButton={isClickedDropDownButton}
          >
            <StyledUserDropDownItem>Profile</StyledUserDropDownItem>
            <StyledUserDropDownItem>Properties</StyledUserDropDownItem>
            <StyledUserDropDownLogoutItem>Logout</StyledUserDropDownLogoutItem>
          </StyledUserDropDownItems>
        </StyledUserDropDownMenu> */}
      </StyledUserDropDown>
    </StyledNavbar>
  );
};

export default TitleBar;
