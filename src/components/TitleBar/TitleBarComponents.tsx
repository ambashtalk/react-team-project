import { StyledUserBox } from "./TitleBarStyles"
import React from 'react';

type userBox_proptype = {
    clicked: () => void;
}
export const UserBox: React.FC<userBox_proptype> = (props) => {
    return <StyledUserBox onClick={props.clicked}>{props.children}</StyledUserBox>
}