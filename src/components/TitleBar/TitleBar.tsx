import React, { useState } from "react";
import defaultUserImage from "../../assets/images/maleProfileImage.jpeg";
import { UserDropDownButton } from "./TitleBarComponents";
import {
  StyledNavbar,
  StyledNavHeading,
  StyledUserDropDown,
  StyledUserDropDownItem,
  StyledUserDropDownItems,
  StyledUserDropDownLogoutItem,
  StyledUserDropDownMenu,
  StyledUserProfileBox,
  StyledUserProfileImage,
  StyledUserProfileName,
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
        <StyledUserProfileBox>
          <StyledUserProfileImage src={defaultUserImage} alt="UserImage" />
          <StyledUserProfileName>
            Welcome! {props.userIsLoggedIn ? props.username : "Guest"}
          </StyledUserProfileName>
        </StyledUserProfileBox>

        <StyledUserDropDownMenu>
          <UserDropDownButton clicked={toogleUserDropDownMenu}>
            Settings
          </UserDropDownButton>

          <StyledUserDropDownItems
            isClickedDropDownButton={isClickedDropDownButton}
          >
            <StyledUserDropDownItem>Profile</StyledUserDropDownItem>
            <StyledUserDropDownItem>Properties</StyledUserDropDownItem>
            <StyledUserDropDownLogoutItem>Logout</StyledUserDropDownLogoutItem>
          </StyledUserDropDownItems>
        </StyledUserDropDownMenu>
      </StyledUserDropDown>
    </StyledNavbar>
  );
};

export default TitleBar;
