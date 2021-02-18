import { StyledUserDropDownButton } from "./TitleBarStyles"
import React from 'react';

type userDropdownButton_proptype = {
    clicked: () => void;
}
export const UserDropDownButton: React.FC<userDropdownButton_proptype> = (props) => {
    return <StyledUserDropDownButton onClick={props.clicked}>{props.children}</StyledUserDropDownButton>
}